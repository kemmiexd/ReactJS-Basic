import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';


class TaskForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      status: false
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChange = (event) => {
    const target = event.target;
    const name = target.name;
    var value = target.value;
    name === 'status' && ( value = target.value === 'true' ? true : false);

    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.onClear();
    this.onCloseForm();
  }

  onClear = () => {
    this.setState({
      name: '',
      status: false
    })
  }

  render() {
    return (
      <div style={{
        border: "1px solid #e1e1e1",
        borderRadius: 5,
      }}>
        <h5 style={{padding: " 10px 15px", background: "#f4f4f4"}}>
          Add Item 
          <span 
            style={{float: "right", cursor: "pointer"}} 
            className="mdi mdi-close"
            onClick={ this.onCloseForm }
          >
          </span>
        </h5>
        <form className="p-3" onSubmit={this.onSubmit}>
          <div className="grey-text">
            <input 
              className="form-control mb-3" 
              type="text" 
              placeholder="Name" 
              aria-label="Name" 
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />

            <select 
              className="browser-default custom-select"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={true}>Active</option>
              <option value={false}>Private</option>
            </select>
          </div>
          <div className="text-center mb-3 mt-3">
            <MDBBtn type="submit" color="success mr-3">Add Item</MDBBtn>
            <MDBBtn 
              color="danger"
              type="button"
              onClick={this.onClear}
            >
              Cancel
            </MDBBtn>
          </div>
        </form>
      </div>
    )
  }
}

export default TaskForm;
