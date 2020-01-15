import React, {Component} from "react";
import {Link} from "react-router-dom";
import {inject, observer} from "mobx-react";


@inject('authStore')
@observer

class Login extends Component {

    emailHandler = (e) => this.props.authStore.setEmail(e.target.value);
    passwordHandler = (e) => this.props.authStore.setPassword(e.target.value);

    render() {
        const { values } = this.props.authStore;

        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign In</h1>
                            <p className="text-xs-center">
                                <Link to="register">Need an account?</Link>
                            </p>
                            <form >
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="email"
                                            placeholder="Email"
                                            value={values.email}
                                            onChange={this.emailHandler}
                                        />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password"
                                            value={values.password}
                                            onChange={this.passwordHandler}
                                        />
                                    </fieldset>

                                    <button
                                        className="btn btn-lg btn-primary pull-xs-right"
                                        type="submit"
                                    >
                                        Sign in
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;