import React, { Component } from 'react';
import {
    Row, Col, Table, Tabs, Tab, Form,
    Button,
    FormControl
} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerBranch, get_branches, deleteBranch, get_batches } from "../actions/branchActions";
import { get_coach_view2_axios } from "../actions/coach2actions";
import classnames from "classnames";

class Batch extends Component {
    constructor() {
        super();
        this.state = {
            branchname: "",
            branchaddress: "",
            branchincharge: "",
            branchcontact: "",
            errors: {},
            succeserret: {}
        };
    }
    componentDidMount() {
        /* this._isMounted = true; */
        console.log("On coach page this is state " + this.props.auth.isAuthenticated);

        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (!this.props.auth.isAuthenticated) {
            this.props.history.push("../auth/signin-1");
        }
        // fire functon to get branch & caoch list 
        this.props.get_batches();
        this.props.get_coach_view2_axios();
    }
    render() {
        const { batchlist } = this.props.branch;
        const { coachlist } = this.props.coach2;
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Batch creation form' isOption>
                            <Col md={12}>
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Batch Name</Form.Label>
                                                <Form.Control type="text" placeholder="Branch Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Standard fees</Form.Label>
                                                <Form.Control type="test" placeholder="Mobile number" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Coach</Form.Label>
                                                <Form.Control as="select" className="mb-3">
                                                    <option>Select the Inchrage</option>
                                                    <option>Isabella Christensen</option>
                                                    <option>Mathilde Andersen</option>
                                                    <option>Karla Sorensen</option>
                                                    <option>Ida Jorgensen</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>

                                        <Col md={12}>
                                            <Button variant="primary">
                                                Submit
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    <Col>
                        <Card title='Batches' isOption>
                            <Table responsive hover>
                                <thead>
                                    <th>Batch Name</th>
                                    <th>Created</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {batchlist.map(
                                        ({ _id, batchname ,batchcreatedon}) => 
                                        
                                        
                                        <tr className="unread">

                                        <td>
                                            <h6 className="mb-1">{batchname} </h6>

                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />{batchcreatedon}</h6>
                                        </td>
                                        <td><a href={DEMO.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                        
                                        )
                                    }
                                    
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}
Batch.propTypes = {
    registerBranch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    coach2: PropTypes.object.isRequired,
    branch: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    coach2: state.coach2,
    branch: state.branch,
});
export default connect(
    mapStateToProps,
    { registerBranch, get_branches, get_coach_view2_axios, get_batches }
)(withRouter(Batch));