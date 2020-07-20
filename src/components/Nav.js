import React from 'react';
// import SearchBox from './SearchBox';
import "./styles/Nav.css"

function Nav({ handleSearchChange }){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <h1>Employee Directory</h1>
          {/* <SearchBox handleSearchChange = {handleSearchChange}></SearchBox> */}
        </div>
        </nav>

    )
}

 
export default Nav;