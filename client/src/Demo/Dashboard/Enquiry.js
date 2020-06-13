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
class Enquiry extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card title='Enquiry form' isOption>
                            <Col md={12}>
                                <Form>
                                    <Row>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Parent Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Parent Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Parent Contact*</Form.Label>
                                                <Form.Control type="text" placeholder="10 digit mobile no" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Addresss*</Form.Label>
                                                <Form.Control type="text" placeholder="Addresss " />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Student Name*</Form.Label>
                                                <Form.Control type="text" placeholder="Student Name" />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Sports*</Form.Label>
                                                <Form.Control as="select" className="mb-3">
                                                    <option>Select a sport</option>
                                                    <option>BasketBall</option>
                                                    <option>Hockey</option>
                                                    <option>Football</option>
                                                    <option>Cricket</option>
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Expected fees</Form.Label>
                                                <Form.Control type="test" placeholder="Expected fees" />
                                            </Form.Group>
                                        </Col>
                                         <Col md={4}>
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Referance Coach</Form.Label>
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
            </Aux>
        );
    }
}

export default Enquiry;