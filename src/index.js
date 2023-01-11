import React from 'react';
import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './App.js'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

const container = document.getElementById('root');
const root = createRoot(container)

root.render(
    <Router>
        <Provider store={store}>
            <App></App>
        </Provider>
    </Router>
)