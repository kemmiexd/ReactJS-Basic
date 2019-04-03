import React, { Component  } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { connect } from 'react-redux';

import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import Search from './components/Search';
import Sort from './components/Sort';

import * as actions from './actions/index';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskEditing: null,
      fitler: { 
        name: '', 
        status: -1 
      },
      keyword: '',
      sortBy: 'name',
      sortValue: 1
    }
  }

  onToggleForm = () => {
    // if (this.state.isDisplayForm && this.state.taskEditing !== null) {
    //   this.setState({
    //     isDisplayForm: true,
    //     taskEditing: null
    //   });
    // } else {
    //   this.setState({
    //     isDisplayForm: !this.state.isDisplayForm,
    //     taskEditing: null
    //   });
    // }
    this.props.onToggleForm();
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }

  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    this.onCloseForm();
  }

  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];

    this.setState({
      taskEditing: taskEditing
    })

    this.onShowForm()
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    
    this.setState({
      filter: {
        name: filterName.toLowerCase(), 
        status: filterStatus
      }
    });
  }

  onSearch = (keyword) => {
    this.setState({
       keyword: keyword
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    });
  }

  render() {
    var { taskEditing, filter, keyword, sortBy, sortValue } = this.state;

    var { isDisplayForm } = this.props;
    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name) !== -1
    //     });
    //   }

    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task;
    //     } else {
    //       return task.status === (filter.status === 1 ? true : false)
    //     }
    //   });
    // }

    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword) !== -1
    //   });
    // }

    // if (sortBy === 'name') {
    //   tasks.sort((item1, item2) => {
    //     if (item1.name > item2.name) return sortValue
    //     else if (item1.name < item2.name) return -sortValue
    //     else return 0
    //   });
    // } else {
    //   tasks.sort((item1, item2) => {
    //     if (item1.status > item2.status) return -sortValue
    //     else if (item1.status < item2.status) return sortValue
    //     else return 0
    //   });
    // }

    var elementTaskForm = isDisplayForm === true
      ? <TaskForm 
        task={taskEditing}
      /> 
      : ''
    ;

    return (
      <div className="App">
        <MDBContainer>
          <h1 className="text-center mb-2 mt-2">Todo List</h1>

          <MDBRow>
            <MDBCol sm={ isDisplayForm === true ? "4" : "" }>
              { elementTaskForm }
            </MDBCol>

            <MDBCol sm={ isDisplayForm === true ? "8" : "12" }>
              <MDBBtn 
                className="mb-3" 
                color="primary"
                onClick={ this.onToggleForm }
              >
                <i className="mdi mdi-plus mdi-18px mr-1" />
                Add Item  
              </MDBBtn>

              <MDBRow className="mb-3">
                <MDBCol>
                  <Search onSearch={this.onSearch} />
                </MDBCol>
                <MDBCol>
                  <Sort onSort={this.onSort} sortBy={sortBy} sortValue={sortValue} />
                </MDBCol>
              </MDBRow>

              <TaskBoard 
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
              /> 

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
