import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import App from './components/App';
import Auth from './components/Auth';
import * as serviceWorker from './serviceWorker';
import './theme.css';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Auth} />
                <Route path="/register" component={Auth} />
                <Route path="/forgot-password" component={Auth} />
                <Route path="/overview" component={App} />
                <Route path="/book" component={App} />
                <Route path="/collection" component={App} />
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
