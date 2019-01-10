import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import CheckAll from './img/check-all.svg';

class App extends Component {
  constructor () {
    super();
    this.state = {
      todoItems: [
        { title: 'Bú Bóng', isChecked: true }, 
        { title: 'Bán ma túy', isChecked: true }, 
        { title: 'Tự kỷ' },
      ]
    }   

    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onItemClicked(item) {
    return (event) => {
      const isChecked = item.isChecked;
      const { todoItems } = this.state
      const index = todoItems.indexOf(item);
      this.setState({
        newItem: '',
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isChecked: !isChecked,
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp (event) {
    if (event.keyCode === 13) { // enter
      let text = event.target.value;
      if (!text) {
        return;
      }
  
      text = text.trim();
      if (!text) { return; }
  
      this.setState({
        newItem: '',
        todoItems: [
          { title: text, isChecked: false },
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  render() {
    const { todoItems, newItem } = this.state;
    return (
      <div className="App">
        <div className="Header">
          <img src={CheckAll} width={30} height={30} />
          <input 
            type="text" 
            placeholder="Thứ cần buôn trong ngày" 
            value={newItem}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp} />
        </div>

        { todoItems.length > 0 && todoItems.map((item, index) => 
            <TodoItem 
              key={index} 
              item={item} 
              onClick={this.onItemClicked(item)} />
          )
        }
        { todoItems.length === 0 && 'Chưa tỉnh' }
      </div>
    );
  }
}

export default App;
