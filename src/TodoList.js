import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const list = this.props.tasks.map((todo) => {
      return todo.id;
    });
    return (
      <div className="TodoList">
        <ul>{list}</ul>
      </div>
    );
  }
}

export default TodoList;
