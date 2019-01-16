import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isCollapsed: !this.state.isCollapsed 
    });
  }

  render() {
    const { header, children } = this.props;
    const { isCollapsed } = this.state;

    return (
      <div className="Card">
        <div className="Header" onClick={this.onClick}>
          <h2>{header}</h2>
        </div>
        {
          !isCollapsed && 
          <div className="Content">
            <p>{children}</p>
          </div>
        }
      </div>
    )
  }
}

export default Card