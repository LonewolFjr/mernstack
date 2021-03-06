import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
import Aux from "../../../hoc/_Aux";
import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { branchfetcher } from "../../actions/authActions";

import classnames from "classnames";
class SignUp1 extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            assocbranch :{}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        /*  console.log(this.state.user);
         console.log(this.props);return 0; */
        /* if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        console.log("states changed"); */
        const userData = {
            id: this.props.auth.user.id
        };
        this.props.branchfetcher(userData);

    }
    componentWillReceiveProps(nextProps) {
        /*  if (nextProps.auth.isAuthenticated) {
             if (nextProps.auth.user.usertype == 'admin') {
                 this.props.history.push("/admin");
             }
             else if (nextProps.auth.user.usertype == 'parent') {
                 this.props.history.push("/parentdash");
             }
             else if (nextProps.auth.user.usertype == 'coach') {
                 this.props.history.push("/branchselector");
             }
         } */
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        console.log("THis is after login response gets in nextprop and state is" + nextProps.auth.user.usertype);

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
        const { assocbranch } = this.state;
        console.log("assocbranch");

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
                        <div class="card">{/* {assocbranch.map(
                            ({ _id }) => <option value={_id} >a</option>)
                        } */} {console.log(assocbranch)

                            }
                            <div class="border-bottom card-body"><div class="row d-flex align-items-center"><div class="col-auto"></div><div class="col"><h4 class="f-w-300">Welcome User</h4><span class="d-block text-uppercase"><h6>{this.props.auth.user.name}</h6></span></div></div></div>

                            <div class="border-bottom card-body"><div class="row d-flex align-items-center"><div class="col-auto"><i class="feather icon-map-pin f-30 text-c-blue"></i></div><div class="col"><h3 class="f-w-300">235</h3><span class="d-block text-uppercase">Coach</span></div></div></div>

                        </div>
                    </div></div>
            </Aux>

        );
    }
}
SignUp1.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    branch: state.branch
});


export default connect(
    mapStateToProps,
    { branchfetcher }
)(SignUp1);