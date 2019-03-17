import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";

class Search extends Component {
  render() {
    return (
      <form action="" style={{position: "relative"}}>
        <MDBInput hint="Search" type="text" containerClass="mt-0" />
        <MDBBtn 
          color="info"
          style={{
            position: "absolute",
            top: 0,
            right: 0
          }}
        >
          Search
        </MDBBtn>
      </form>
    )
  }
}

export default Search;
