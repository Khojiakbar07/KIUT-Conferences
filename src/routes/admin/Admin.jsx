import "./Admin.scss";
import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import LoginModal from "../../components/login-modal/LoginModal";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participantList: [],
    };
  }

  refreshList = () => {
    axios
      .get(`https://conference.kiut.uz/api/apps/participant/list/`)
      .then((res) => {
        this.setState({ participantList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.refreshList();
  }

  dateLocal(datetime) {
    const dt = new Date(datetime);
    dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());
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
      <tr key={uuidv4()}>
        <td className="id-col">{index + 1}</td>
        <td>{item.fullname}</td>
        <td>{item.worked_place}</td>
        <td>{item.phone}</td>
        <td>{item.email}</td>
        <td>{item.payment_amount}</td>
        <td>{item.payment_id}</td>
        <td>{item.conference_section}</td>
        <td>
          <a href={item.support_doc} rel="noreferrer" target="_blank">
            See Document
          </a>
        </td>
        <td>
          {this.dateLocal(item.created_at)}
          <br />
          {this.timeLocal(item.created_at)}
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className={"admin"}>
        <LoginModal />
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Work Place</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Payed amount <br/> (UZS)</th>
              <th>Payment ID</th>
              <th>Conference Section</th>
              <th>Support Doc.</th>
              <th>Date submitted</th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}</tbody>
        </table>
      </div>
    );
  }
}

export default Admin;
