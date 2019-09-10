import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter, matchPath} from 'react-router-dom';

import routes from '../frontend/routes';
import App from '../frontend/App';

const app = express();
app.use(express.static('dist'));
app.engine('hbs', exphbs({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views/'));

app.get('*', (req, res, next) => {
    const activeRoute = routes.find((route) => matchPath(req.url, route));
    const requestInitialData = activeRoute.component &&
        activeRoute.component.requestInitialData &&
        activeRoute.component.requestInitialData();
    Promise.resolve(requestInitialData)
        .then((initialData = {}) => {
            const markup = renderToString(
                <StaticRouter location={req.url} context={{}}>
                    <App initialData={initialData} />
                </StaticRouter>
            );
            res.render(
                'index',
                {
                    layout: false,
                    body: markup,
                    initialData: JSON.stringify(initialData).replace(
                        /</g,
                        '\\u003c'
                    )
                }
            );
        })
        .catch(next);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
