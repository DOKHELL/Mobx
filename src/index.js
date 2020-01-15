import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "mobx-react";

import store from './store'

const stores = {
    store
};


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>,
    document.getElementById('root'));


