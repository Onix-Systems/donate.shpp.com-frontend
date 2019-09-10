import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import promiseFinally from 'promise.prototype.finally';

import App from './App';

promiseFinally.shim();

ReactDOM.hydrate(
    <Router><App /></Router>,
    document.getElementById('root')
);
