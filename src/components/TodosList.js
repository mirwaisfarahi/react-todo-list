import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {

    render() {
        return (
            <ul>
                {this.props.todos.map(todo => {
                    return <TodoItem key={todo.id} todo={todo} handleChange={this.props.handleChangeProps} />
                })}
            </ul>
        );
    }
}

export default TodosList;