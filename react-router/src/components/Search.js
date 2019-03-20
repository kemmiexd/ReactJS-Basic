import React, { Component } from 'react';
import { MDBInput, MDBBtn } from "mdbreact";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  }

  render() {
    var { keyword } = this.state;

    return (
      <form style={{position: "relative"}}>
        <MDBInput 
          hint="Search" 
          type="text" 
          containerClass="mt-0" 
          name="keyword"
          value={keyword}
          onChange={this.onChange}
        />
        <MDBBtn 
          color="info"
          style={{position: "absolute", top: 0, right: 0}}
          onClick={this.onSearch}
        >
          <i className="mdi mdi-magnify mr-1" />
          Search
        </MDBBtn>
      </form>
    )
  }
}

export default Search;
