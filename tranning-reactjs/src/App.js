import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor () {
    super();
    let todoItems = [
      { title: 'Bú Bóng', isChecked: true }, 
      { title: 'Bán ma túy', isChecked: true }, 
      { title: 'Tự kỷ' },
    ];

    this.state = {
      todoItems
    };

    this.onItemClicked = this.onItemClicked.bind(this);
  }

  onItemClicked() {
    this.setState({

    });

  }

  render() {
    const { todoItems } = this.state;
    return (
      <div className="App">
        { todoItems.length > 0 && todoItems.map((item, index) => (
            <TodoItem key={index} item={item} onClick={this.onItemClicked} />
          ))
        }
        { todoItems.length === 0 && 'Chưa tỉnh' }
      </div>
    );
  }
}

export default App;
