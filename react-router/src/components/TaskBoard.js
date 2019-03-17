import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';

import TaskItem from './TaskItem';

class TaskBoard extends Component {
  render() {
    const { tasks } = this.props;
    const elementTasks = tasks.map((task, index) => {
      return <TaskItem 
              key={task.id} 
              index={index} 
              task={task} 
              onUpdateStatus={this.props.onUpdateStatus}
            />
    });

    return (
      <MDBTable bordered>
        <MDBTableHead style={{background: "#f4f4f4"}}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td></td>
            <td>
              <MDBInput hint="Search" type="text" containerClass="mt-0" />
            </td>
            <td>
              <select className="browser-default custom-select">
                <option value="0">All</option>
                <option value="1">Active</option>
                <option value="2">Private</option>
              </select>
            </td>
            <td></td>
          </tr>
          { elementTasks }
        </MDBTableBody>
      </MDBTable>
    )
  }
}

export default TaskBoard;
