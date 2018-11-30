import React, { Component } from "react";
import firebase from "../firebase";

class Chat extends Component {
  state = {
    todos: []
  };

  // message {
  //   id: as;dlfkja;lsdfkj
  //   body: q;sdlkfja;lskdjf
  //   user: 'dan'
  //
  // }

  componentDidMount() {
    const todosRef = firebase.database().ref("todos");
    todosRef.on("value", snapshot => {
      let todos = snapshot.val();
      let newState = [];
      for (let todo in todos) {
        console.log("todo", todo);
        newState.push({
          id: todo,
          title: todos[todo].title
        });
      }
      console.log("newstate", newState);
      this.setState({
        ...this.state,
        todos: newState
      });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const todosRef = firebase.database().ref("todos");
    const todo = {
      title: this.state.newTodo
    };
    todosRef.push(todo);
  };

  render() {
    let listOfTodos = this.state.todos.map(todo => (
      <li key={todo.id}>{todo.title}</li>
    ));
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            New Message:{" "}
            <input
              type="text"
              name="newTodo"
              onChange={e => this.setState({ newTodo: e.target.value })}
              value={this.state.newTodo}
            />
            <button type="submit">Send!</button>
          </p>
        </form>
        <div>
          <ul color="danger">{listOfTodos}</ul>
        </div>
      </div>
    );
  }
}

export default Chat;
