
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkedImg from '../img/checked.svg';

class TodoItem extends Component {
  render() {
    const { item, onClick } = this.props;
    let url = checkImg;
    if (item.isChecked) {
      url = checkedImg;
    }

    return (
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-checked': item.isChecked
      })}>

        <img src={url} />
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    isChecked: PropTypes.bool,
    title: PropTypes.string
  }),
  onClick: PropTypes.func 
};

export default TodoItem;
