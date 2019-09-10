import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppState from './states/AppState';
import routes from './routes';

const App = (props) => {
    const {initialData} = props;
    return (
        <AppState initialData={initialData}>
            <Switch>
                {routes.map((route, id) => (
                    <Route
                        key={[route.path, id].join('_')}
                        {...route}
                    />
                ))}
            </Switch>
        </AppState>
    );
};


export default App;
