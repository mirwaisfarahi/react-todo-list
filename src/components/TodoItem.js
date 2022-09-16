import React from 'react';
/* eslint-disable */

class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={this.props.todo.completed} onChange={() => { this.props.handleChange(this.props.todo.id); }} />
        {' '}
        {this.props.todo.title}
      </li>
    );
  }
}

export default TodoItem;
