import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable */

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChangeProps} />)}
      </ul>
    );
  }
}

export default TodosList;
