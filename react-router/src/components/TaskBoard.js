import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBInput } from 'mdbreact';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';

class TaskBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )

    this.setState({
      [name]: value
    });


  }

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elementTasks = tasks.map((task, index) => {
      return <TaskItem 
              key={task.id} 
              index={index} 
              task={task} 
              onUpdateStatus={this.props.onUpdateStatus}
              onDelete={this.props.onDelete}
              onUpdate={this.props.onUpdate}
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
              <MDBInput 
                hint="Quick Search" 
                type="text" 
                containerClass="mt-0" 
                name="filterName"
                value={filterName}
                onChange={this.onChange}
              />
            </td>
            <td>
              <select 
                className="browser-default custom-select"
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}
              >
                <option value="-1">All</option>
                <option value="1">Active</option>
                <option value="0">Private</option>
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

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
};

export default connect(mapStateToProps, null)(TaskBoard);
