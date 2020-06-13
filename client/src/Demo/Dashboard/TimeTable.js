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
class TimeTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            check: true
        }
        this.submitandcheck = this.submitandcheck.bind(this)
        this.tableJSON = {
            "Monday": [],
            "Tuesday": [],
            "Wednesday": [],
            "Thursday": [],
            "Friday": [],
            "Saturday": [],
            "Sunday": []
        }
    }
    submitandcheck(e) {
        e.preventDefault();

        /* console.log(this.selectedDay.options[this.selectedDay.selectedIndex].value); */
        if (this.selectedDay.textContent.length > 1) {
            this.tableJSON[this.selectedDay.options[this.selectedDay.selectedIndex].value].push({
                "startTime": this.startTime.value,
                "endTime": this.endTime.value
            })
        }

        this.setState({ check: !this.state.check })
    }
    renderTableData() {
        var tableRows = 0;
        var tableData = [];
        (Object.keys(this.tableJSON)).map((key) => {
            if (this.tableJSON[key].length > tableRows) {
                tableRows = this.tableJSON[key].length
            }
        }, this)
        for (var i = 0; i < tableRows; i++) {
            tableData.push(<tr key={i}>{(Object.keys(this.tableJSON)).map((key) => {
                if (this.tableJSON[key][i] === undefined) {
                    return <td align="left">-</td>
                } else {
                    return <td align="left">{this.tableJSON[key][i].startTime + " to " + this.tableJSON[key][i].endTime}</td>
                }
            }, this)}</tr>)
        }
        return tableData
    }
    render() {
        const flexContainer = {
            display: 'flex',
            flexDirection: 'row',
        };
        return (
            <div>
                <Row>
                    <Col>
                        <Card title='Branch creation form' isOption>
                            <Col md={12}>
                                <Form>
                                    <Row>
                                        <Col item md={4} >
                                            <Form.Label>Day</Form.Label>
                                            <Form.Group >
                                                <Form.Control as="select" defaultValue="" id="grouped-select" ref={(selectedDay) => { this.selectedDay = selectedDay }}>
                                                    {(Object.keys(this.tableJSON)).map((key) => { return <option value={key}>{key}</option> })}
                                                </Form.Control>
                                            </Form.Group>
                                        </Col>
                                        <Col item md={4} >
                                            <Form.Label>Start time</Form.Label>
                                            <Form.Group >
                                                <Form.Control
                                                    id="time"
                                                    type="time"
                                                    defaultValue="12:00"
                                                    ref={(startTime) => { this.startTime = startTime }}

                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col item md={4}  >
                                            <Form.Label>End time</Form.Label>
                                            <Form.Group >
                                                <Form.Control
                                                    id="time"
                                                    type="time"
                                                    defaultValue="12:00"
                                                    ref={(endTime) => { this.endTime = endTime }}
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col md={4}>

                                            <Button variant="primary" onClick={this.submitandcheck}>
                                                Add session
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
                        <Card title='Time Table' isOption>
                            <Row>
                                <Col>
                                    <Table responsive hover>
                                        <thead>
                                            <tr>
                                                {(Object.keys(this.tableJSON)).map((key) => { return <td><b>{key}</b></td> })}
                                            </tr>
                                        </thead>
                                        <tbody> {this.renderTableData()} </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TimeTable;