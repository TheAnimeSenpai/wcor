import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import history from '../history';

import Home from './home';

import AuthService from '../codebase/util/AuthService'

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
            <div>
                Dashboard section...
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
            </div>
        );
    }
}

export default Dashboard;