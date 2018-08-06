import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import history from '../../history';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header" className="header navbar-default">
                <div className="navbar-header">
                    <a className="navbar-brand"><span className="navbar-logo"></span> Cor</a>
                    <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>
                <ul className="navbar-nav navbar-right">
                    <li>
                        <form className="navbar-form">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter keyword" />
                                <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                            </div>
                        </form>
                    </li>
                    <li className="dropdown">
                        <a data-toggle="dropdown" className="dropdown-toggle f-s-14">
                            <i className="fa fa-bell"></i>
                            <span className="label">5</span>
                        </a>
                        <ul className="dropdown-menu media-list dropdown-menu-right">
                            <li className="dropdown-header">NOTIFICATIONS (5)</li>
                            <li className="media">
                                <a href="javascript:;">
                                    <div className="media-left">
                                        <i className="fa fa-bug media-object bg-silver-darker"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Server Error Reports <i className="fa fa-exclamation-circle text-danger"></i></h6>
                                        <div className="text-muted f-s-11">3 minutes ago</div>
                                    </div>
                                </a>
                            </li>
                            <li className="media">
                                <a href="javascript:;">
                                    <div className="media-left">
                                        <img src="../assets/img/user/user-1.jpg" className="media-object" alt="" />
                                        <i className="fab fa-facebook-messenger text-primary media-object-icon"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">John Smith</h6>
                                        <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                        <div className="text-muted f-s-11">25 minutes ago</div>
                                    </div>
                                </a>
                            </li>
                            <li className="media">
                                <a href="javascript:;">
                                    <div className="media-left">
                                        <img src="../assets/img/user/user-2.jpg" className="media-object" alt="" />
                                        <i className="fab fa-facebook-messenger text-primary media-object-icon"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading">Olivia</h6>
                                        <p>Quisque pulvinar tellus sit amet sem scelerisque tincidunt.</p>
                                        <div className="text-muted f-s-11">35 minutes ago</div>
                                    </div>
                                </a>
                            </li>
                            <li className="media">
                                <a href="javascript:;">
                                    <div className="media-left">
                                        <i className="fa fa-plus media-object bg-silver-darker"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading"> New User Registered</h6>
                                        <div className="text-muted f-s-11">1 hour ago</div>
                                    </div>
                                </a>
                            </li>
                            <li className="media">
                                <a href="javascript:;">
                                    <div className="media-left">
                                        <i className="fa fa-envelope media-object bg-silver-darker"></i>
                                        <i className="fab fa-google text-warning media-object-icon f-s-14"></i>
                                    </div>
                                    <div className="media-body">
                                        <h6 className="media-heading"> New Email From John</h6>
                                        <div className="text-muted f-s-11">2 hour ago</div>
                                    </div>
                                </a>
                            </li>
                            <li className="dropdown-footer text-center">
                                <a href="javascript:;">View more</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown navbar-user">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
                            <img src="../assets/img/user/user-13.jpg" alt="" />
                            <span className="d-none d-md-inline">Adam Schwartz</span> <b className="caret"></b>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="javascript:;" className="dropdown-item">Edit Profile</a>
                            <a href="javascript:;" className="dropdown-item"><span className="badge badge-danger pull-right">2</span> Inbox</a>
                            <a href="javascript:;" className="dropdown-item">Calendar</a>
                            <a href="javascript:;" className="dropdown-item">Setting</a>
                            <div className="dropdown-divider"></div>
                            <a href="javascript:;" className="dropdown-item">Log Out</a>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;