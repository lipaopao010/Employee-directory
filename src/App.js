import React, { Component } from "react";
import Wrapper from "./components/wrapper";
import DataArea from "./components/DataArea";
import employees from "./employees.json";
import Nav from "./components/Nav";
import SearchInput from "./components/SearchInput";

class App extends Component {
  state = {
    employees,
    filteredEmployees: employees
  };

  //function handleSearch
  onSearch = (event) => {
    const keyword = event.target.value;
    const filtered = this.state.employees.filter((employee) => {
      return employee.name.toLowerCase().includes(keyword.toLowerCase())
    });
    this.setState({
      filteredEmployees: filtered
    })

  }

  onSort = (field,direction) => {
    console.log(field)

    const cloned = [
      ...this.state.filteredEmployees
    ]

    if(direction){
      cloned.sort((employeeA, employeeB) => {

        
        if(employeeA[field] < employeeB[field] ){
          return -1
        }else{
          return 1
        }
      })}
      else{
        cloned.sort((employeeA, employeeB) => {

          if(employeeA[field] < employeeB[field] ){
            return 1
          }else{
            return -1
          }
        })

      
    }
    

    this.setState({
      filteredEmployees: cloned,
    })
    console.log("sorted!")
  }

  render() {
    return (
      <Wrapper>
      
          <Nav/>
          <SearchInput
            onSearch = {this.onSearch}
          />

        
        <DataArea employees={this.state.filteredEmployees}  onSort = {this.onSort}> </DataArea> 
      </Wrapper>
    );
  }
}

export default App;
