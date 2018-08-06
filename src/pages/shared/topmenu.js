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
                        <Link to="/home">
                            <i className="fas fa-home fa-2x"></i>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/budget">
                            <i className="fas fa-wallet fa-2x"></i>
                            <span>Budget</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/reports">
                            <i className="far fa-chart-bar fa-2x"></i>
                            <span>Reports</span>
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to="/accounts">
                            <i className="fas fa-university fa-2x"></i>
                            <span>Accounts</span>
                        </Link>
                    </li>
                    <li className="navItem has-sub">
                        <a>
                            <i className="fas fa-cogs fa-2x"></i>
                            <span>Extras</span>
                        </a>
                        <ul className="sub-menu">
                            <li><Link to="/extras/settings">Settings</Link></li>
                            <li><Link to="/extras/backrest">Backup / Restore</Link></li>
                            <li><Link to="/extras/categories">Categories</Link></li>
                            <li><Link to="/extras/port">Import / Export</Link></li>
                        </ul>
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