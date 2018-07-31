import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-cover">
                    <div className="login-cover-image"></div>
                    <div className="login-cover-bg"></div>
                </div>
                <div id="page-container" className="fade">
                    <div className="login login-v2" data-pageload-addclass="animated fadeIn">
                        <div className="login-header">
                            <div className="brand">
                                <span className="logo"></span> <b>Color</b> Admin
                                <small>responsive bootstrap 3 admin template</small>
                            </div>
                            <div className="icon">
                                <i className="fa fa-lock"></i>
                            </div>
                        </div>
                        <div className="login-content">
                            <form className="margin-bottom-0">
                                <div className="form-group m-b-20">
                                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" required />
                                </div>
                                <div className="form-group m-b-20">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" required />
                                </div>
                                <div className="checkbox checkbox-css m-b-20">
                                    <input type="checkbox" id="remember_checkbox" />
                                    <label htmlFor="remember_checkbox">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="login-buttons">
                                    <button type="submit" className="btn btn-success btn-block btn-lg">Sign me in</button>
                                </div>
                                <div className="m-t-20">
                                    Not a member yet? Click <a href="javascript:;">here</a> to register.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
