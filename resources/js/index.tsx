import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

import {store} from "@/store";
import App from "./App.tsx";

import '@sass/index.scss';
import {BrowserRouter} from "react-router-dom";
import Cookies from "js-cookie";

// Get CSRF token for API
if(!Cookies.get('XSRF-TOKEN'))
    fetch('/sanctum/csrf-cookie', {
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    });

createRoot(document.getElementById('app') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
