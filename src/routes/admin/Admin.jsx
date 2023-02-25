import {Container, Table} from "react-bootstrap";
import './Admin.css';
import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            participantList: []
        }
    }

    refreshList = () => {
        axios.get(`https://conference.kiut.uz/api/apps/participant/list/`)
            .then(res => {
                this.setState({participantList: res.data})
            })
            .catch(err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.refreshList()
    }

    dateLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        console.log(dt.toISOString().slice(0, 16))
        console.log(dt.toISOString())
        return dt.toISOString().slice(0, 10);
    }

    timeLocal(datetime) {
        const dt = new Date(datetime);
        dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
        return dt.toISOString().slice(11, 16);
    }

    renderItems = () => {
        const items = this.state.participantList;

        return items.map((item, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.fullname}</td>
                    <td>{item.worked_place}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to={item.support_doc}>
                            See Document
                        </Link>
                    </td>
                    <td>
                        <Link to={item.payment_doc}>
                            See Payment
                        </Link>
                    </td>
                    <td>
                        {this.dateLocal(item.created_at)}
                        <br/>
                        {this.timeLocal(item.created_at)}
                    </td>
                </tr>
            )
        )
    }

    render() {
        return (<Container className={"admin-page bg-light p-3 pt-5"}>
            <Table striped bordered hover>
                <thead>
                <tr className={"bg-dark text-light"}>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Work Place</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Support Doc.</th>
                    <th>Payment Cheque</th>
                    <th>Date submitted</th>
                </tr>
                </thead>
                <tbody>
                {this.renderItems()}
                </tbody>
            </Table>
        </Container>);
    }
}

export default Admin;