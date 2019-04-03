import React, { Component } from 'react';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";


class Sort extends Component {
  componentWillReceiveProps(nextProps) {
    
  }

  onClick = (sortBy, sortValue) => {
    this.props.onSort(sortBy, sortValue);
  }

  render() {

    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          <i className="mdi mdi-filter-outline mr-1" />
          Sort Item
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem onClick={() => this.onClick('name', 1)}>
            Name, A - Z
            { (this.props.sortBy === 'name' && this.props.sortValue === 1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.onClick('name', -1)}>
            Name, Z - A
            { (this.props.sortBy === 'name' && this.props.sortValue === -1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem onClick={() => this.onClick('status', 1)}>
            Status, Active
            { (this.props.sortBy === 'status' && this.props.sortValue === 1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
          <MDBDropdownItem onClick={() => this.onClick('status', -1)}>
            Status, Private
            { (this.props.sortBy === 'status' && this.props.sortValue === -1)
              ? <i className="mdi mdi-check ml-3 mdi-18px" /> 
              : ''
            }
          </MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    )
  }
}

export default Sort;
