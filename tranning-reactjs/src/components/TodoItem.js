
import React, { Component } from 'react';
import './TodoItem.css';
import classNames from 'classnames';


class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;

    return (
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-checked': item.isChecked
      })}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

export default TodoItem;
