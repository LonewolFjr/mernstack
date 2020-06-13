import React, { Component } from 'react';
import { Row, Col, Tabs, Tab, Nav, Table } from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import Card from "../../App/components/MainCard";

import DEMO from "../../store/constant";
class FeeCollection extends Component {
    render() {
        return (
            <Aux>
                <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                    <Tab eventKey="home" title="All">
                        <Row>
                            <Card title='Fee Status - ALL' isOption>
                                <Table responsive hover>
                                    <thead>
                                        <th>Student Name</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Sam </h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />Paid</h6>
                                            </td>
                                            <td>700 / 700 Rs.</td>
                                        </tr>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Alina</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15" />Pending</h6>
                                            </td>
                                            <td>400 / 700 Rs.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Paid">
                        <Row>
                            <Card title='Fee Status - Paid' isOption>
                                <Table responsive hover>
                                    <thead>
                                        <th>Student Name</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Sam </h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />Paid</h6>
                                            </td>
                                            <td>700 / 700 Rs.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Pending">
                        <Row>
                            <Card title='Fee Status - Pending' isOption>
                                <Table responsive hover>
                                    <thead>
                                        <th>Student Name</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr className="unread">
                                            <td>
                                                <h6 className="mb-1">Alina</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15" />Pending</h6>
                                            </td>
                                            <td>400 / 700 Rs.</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card>
                        </Row>
                    </Tab>
                </Tabs>
            </Aux>
        );
    }
}

export default FeeCollection;