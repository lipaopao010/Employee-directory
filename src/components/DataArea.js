import React , {Component} from "react";
import { Button } from "react-bootstrap";



class DataArea extends Component {


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name <Button onClick={() => this.props.onSort('name', true)}>▲</Button>
                <Button onClick={() => this.props.onSort('name', false)}>▼</Button></th>
            <th scope="col">Phone</th>
            <th scope="col">Image</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {this.props.employees.map((employee) => (
            <tr>
              <th scope="row">{employee.id}</th>
              <td>{employee.name}</td>
              <td>{employee.Phone}</td>
              <td><imag src = {employee.image}></imag></td>
              <td>{employee.Email}</td>
              <td>{employee.DOB}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataArea;
