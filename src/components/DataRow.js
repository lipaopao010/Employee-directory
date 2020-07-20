import React, { Component } from "react";
import employees from "../employees.json";

class DataRow extends Component {
  
  state = {
    employees
  };

  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <>
        { this.state.employees.map(employee => (
            <tr>
            <th scope="row">{employee.id}</th>
            <td>{ employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.image}</td>
            <td>{employee.email}</td>
            <td>{employee.DOB}</td>
            </tr>
        ))
                
        }
      </>
      )
  }
}

export default DataRow;
