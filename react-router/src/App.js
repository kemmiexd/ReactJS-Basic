import React, { Component  } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import TaskForm from './components/TaskForm';
import TaskBoard from './components/TaskBoard';
import Search from './components/Search';
import Sort from './components/Sort';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDisplayForm: false
    }
  }

  componentWillMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));

      this.setState({
        tasks: tasks
      })
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateId() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + 
    this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4()
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onSubmit = (data) => {
    var { tasks } = this.state;
    data.id = this.generateId();
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
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

  render() {
    var { tasks, isDisplayForm } = this.state;
    var elementTaskForm = isDisplayForm 
      ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm} /> 
      : '';

    return (
      <div className="App">
        <MDBContainer>
          <h1 className="text-center mb-5 mt-2">Todo List</h1>

          <MDBRow>
            <MDBCol sm={ isDisplayForm ? "4" : "" }>
              { elementTaskForm }
            </MDBCol>

            <MDBCol sm={ isDisplayForm ? "8" : "12" }>
              <MDBBtn 
                className="mb-3" 
                color="primary"
                onClick={ this.onToggleForm }
              >
                Add Item  
              </MDBBtn>

              <MDBRow className="mb-3">
                <MDBCol>
                  <Search />
                </MDBCol>
                <MDBCol>
                  <Sort />
                </MDBCol>
              </MDBRow>

              <TaskBoard 
                tasks={ tasks } 
                onUpdateStatus={this.onUpdateStatus}
              /> 

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default App;
