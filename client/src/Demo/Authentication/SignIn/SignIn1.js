import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
class BranchSelector extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        /*  console.log(this.state.user);
         console.log(this.props);return 0; */
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        console.log("states changed");
        
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            if (nextProps.auth.user.usertype == 'admin') {
                this.props.history.push("/admin");
            }
            else if (nextProps.auth.user.usertype == 'parent') {
                this.props.history.push("/parentdash");
            }
            else if (nextProps.auth.user.usertype == 'coach') {
                this.props.history.push("/branchselector");
            }
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        console.log("THis is after login response gets in nextprop and state is"+nextProps.auth.user.usertype);
        
    }
    onChange = e => {
        /* console.log(e.target.id);
        console.log(e.target.value);
        console.log(this.state) */
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log("inptus to be sent are" + this.state.email);

        this.props.loginUser(userData);
    };

    render() {
        const { errors } = this.state;
        return (

            <Aux>
                <Breadcrumb />
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div className="auth-bg">
                            <span className="r" />
                            <span className="r s" />
                            <span className="r s" />
                            <span className="r" />
                        </div>
                        <div className="card">
                            <div className="card-body text-center">
                                <form noValidate onSubmit={this.onSubmit}>
                                    <div className="mb-4">
                                        <i className="feather icon-unlock auth-icon" />
                                    </div>
                                    <h3 className="mb-4">Login</h3>
                                    <div className="input-group mb-3">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.email}
                                            error={errors.email}
                                            className={classnames("form-control", {
                                                invalid: errors.email || errors.emailnotfound
                                            })}
                                            id="email"
                                            type="email" /* className="form-control" */ placeholder="Email" />
                                    </div>
                                    <div className="input-group mb-4">
                                        <input
                                            onChange={this.onChange}
                                            value={this.state.password}
                                            error={errors.password}
                                            id="password"
                                            type="password"
                                            className={classnames("form-control", {
                                                invalid: errors.password || errors.passwordincorrect
                                            })}
                                        />
                                    </div>
                                    <div className="form-group text-left">
                                        <div className="checkbox checkbox-fill d-inline">
                                            <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                        </div>
                                    </div>
                                    <button className="btn btn-primary shadow-2 mb-4" type="submit">Login</button>
                                    <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1">Reset</NavLink></p>
                                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/auth/signup-1">Signup</NavLink></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>

        );
    }
}
BranchSelector.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { loginUser }
)(BranchSelector);