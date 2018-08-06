import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import history from '../../history';

class Topmenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="top-menu" className="top-menu topmenu">
                <ul className="nav">
                    <li className="navItem">
                        <a>
                            <i className="fas fa-home fa-2x"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a>
                            <i className="fas fa-book fa-2x"></i>
                            <span>Budget</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a>
                            <i className="far fa-chart-bar fa-2x"></i>
                            <span>Reports</span>
                        </a>
                    </li>
                    <li className="navItem">
                        <a>
                            <i className="fas fa-university fa-2x"></i>
                            <span>Accounts</span>
                        </a>
                    </li>
                    <li className="menu-control menu-control-left">
                        <a href="#" data-click="prev-menu">
                            <i className="fa fa-angle-left"></i>
                        </a>
                    </li>
                    <li className="menu-control menu-control-right">
                        <a href="#" data-click="next-menu">
                            <i className="fa fa-angle-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Topmenu;