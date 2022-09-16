import React from 'react';
import '../style/App.css';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  constructor() {
    const state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    super(state);
  }

  handleChange = (id) => {
    console.log('clicked!', id);
  }

  render() {
    const { items } = this.state;
    return (
      <div className="todo">
        <TodosList todos={items} handleChangeProps={this.handleChange} />
      </div>
    );
  }
}

export default TodoContainer;
