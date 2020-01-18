import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "mobx-react";

import authStore from "./stores/authStore";
import commonStore from "./stores/commonStore";
import articleStore from "./stores/articleStore";

const stores = {
    authStore,
    commonStore,
    articleStore
};

ReactDOM.render(
    <Provider {...stores}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


