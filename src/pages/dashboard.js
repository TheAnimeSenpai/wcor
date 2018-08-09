import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import history from '../history';

import Home from './home';
import Header from './shared/header';
import Topmenu from './shared/topmenu';
import Port from './extras/port';
import Categories from './extras/categories';

import AuthService from '../codebase/util/AuthService';

import bg from '../assets/img/bg/bg2.jpg';

const auth = new AuthService();

class Dashboard extends Component {

    constructor(props) { 
        super(props);
    }

    componentDidMount() {
        if (!auth.loggedIn()) {
            // replace({ pathname: '/login' })
            history.push('/login');
        }
    }

    render() {
        return (
            <div id="page-container" className="page-container page-without-sidebar page-header-fixed page-with-top-menu"> 
                <Header />
                <Topmenu />
                <div className="background2" style={{ backgroundImage: "url('" + bg + "')" }}></div>
                <div id="content" className="xcontent content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/extras/import-export" component={Port} />
                        <Route path="/extras/categories" component={Categories} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Dashboard;