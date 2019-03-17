import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';

class TaskItem extends Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id)
  }

  render() {
    const { task, index } = this.props;

    return (
      <tr>
        <td>{ index + 1 }</td>
        <td>{ task.name }</td>
        <td className="text-center"> 
          <h6 
            className={ (task.status === true) 
              ? "btn btn-primary pl-2 pr-2 pt-0 pb-0" 
              : "btn btn-danger pl-2 pr-2 pt-0 pb-0" 
            }
            onClick={this.onUpdateStatus}
          >
            {( task.status === true ) ? "Active" : "Private" } 
          </h6>
        </td>
        <td>
          <MDBBtn color="success mr-3">Update</MDBBtn>
          <MDBBtn color="danger">Remove</MDBBtn>
        </td>
      </tr>
    )
  }
}

export default TaskItem;
