import React, { Component } from 'react';
import { ClipLoader } from 'halogenium';
import AuthService from '../codebase/util/AuthService';
import bg from '../assets/img/login-bg/login-bg-16.jpg';

const auth = new AuthService();

class Login extends Component {

    state = {
        username: '',
        password: '',
        loading: false
    }

    getAuthParams() {
        return {
            email: this.state.username,
            password: this.state.password
        }
    }

    login(e) {
        e.preventDefault();
        this.setState({ loading: true })
        const { email, password } = this.getAuthParams();
        var valid = auth.login(email, password);
        if (!valid) {
            this.setState({ loading: false })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('A user was submitted: ' + this.state.username + ',' + this.state.password);
    }

    render() {

        const loading = this.state.loading;

        let button = null;
        if (loading) {
            button = <ClipLoader color="#26A65B" size="20px" margin="4px" />;
        } else {
            button = <button type="submit" className="btn btn-success btn-block btn-lg">Login</button>
        }

        return (
            <div>
                <div className="login-cover">
                    {/* <img src={bg} /> */}
                    <div className="login-cover-image" style={{ backgroundImage: "url('" + bg + "')" }}></div>
                    <div className="login-cover-bg"></div>
                </div>

                <div id="page-container" className="animatedx fadeIn">
                    <div className="login login-v2">
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
                            <form className="margin-bottom-0" onSubmit={this.login.bind(this)}>
                                <div className="form-group m-b-20">
                                    <input type="text" className="form-control form-control-lg" placeholder="Email Address" required
                                        value={this.state.username}
                                        onChange={(event) => this.setState({ username: event.target.value })} />
                                </div>
                                <div className="form-group m-b-20">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password" required
                                        value={this.state.password}
                                        onChange={(event) => this.setState({ password: event.target.value })} />
                                </div>
                                <div className="checkbox checkbox-css m-b-20">
                                    <input type="checkbox" id="remember_checkbox" />
                                    <label htmlFor="remember_checkbox">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="login-buttons">
                                    {button}
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
