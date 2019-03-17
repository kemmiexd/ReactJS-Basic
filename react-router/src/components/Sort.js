import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class Sort extends Component {
  render() {
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Sort Item
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>Name, A - Z</MDBDropdownItem>
          <MDBDropdownItem>Name, Z - A</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Status, Active</MDBDropdownItem>
          <MDBDropdownItem>Status, Private</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
  }
}

export default Sort;
