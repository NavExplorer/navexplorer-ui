import React, {Component} from 'react';
import {Provider} from "react-redux";
import {Switch, Router, Route} from 'react-router-dom';
import {IntlProvider} from "react-intl"

import {history, store} from './helpers/'
import './assets/scss/app.scss';

import {routes as routeConfig} from "./config/routes";
import MainLayout from "./components/layout/MainLayout";

export class App extends Component {
    render() {
        const locale = "en-US";

        const routes = Object.keys(routeConfig).reverse().map(key => (
            <Route path={routeConfig[key].path}>{routeConfig[key].component}</Route>
        ));

        return (
            <Provider store={store}>
                <IntlProvider locale={locale}>
                    <Router history={history}>
                        <MainLayout>
                            <Switch>
                                {routes}
                            </Switch>
                        </MainLayout>
                    </Router>
                </IntlProvider>
            </Provider>
        );
    }
}
