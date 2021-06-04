import React, { Component } from "react";
import { getTodos } from "../actions/getTodosAction";
import Axios from "axios";
import { Table } from "react-bootstrap";
import $ from "jquery";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    $(document).ready(function () {
        $('#my-table').DataTable();
    });
    const token = window.localStorage.getItem("todoToken");
    const { data } = this.state;
    const returnedData = await Axios.get("http://localhost:3000/api/diary", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(token);

    this.setState({
      data: returnedData.data.diary
    });
  }
  render() {
    {
      const data = this.state.data;
    }
    return (
      <div>
        <Table striped bordered hover id="my-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((d) => (
              <tr key={d._id}>
                <td>{d.title}</td>
                <td>{d.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
