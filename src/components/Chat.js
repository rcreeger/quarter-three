import React, { Component } from "react";
import firebase from "../firebase";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from "reactstrap";

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
      <ListGroupItem key={todo.id}>
        <Row>
          <Col sm="1" style={{ fontWeight: "bold", color: "black" }}>
            Richard:
          </Col>
          <Col>{todo.title}</Col>
        </Row>
      </ListGroupItem>
    ));
    return (
      <Container>
        <Row>
          <Col>
            <div style={{ marginTop: 40 }}>
              <h3 className="text-center">Conversation with Richard</h3>
              <ListGroup>{listOfTodos}</ListGroup>
            </div>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="email"
                  id="exampleEmail"
                  placeholder="Add a message here"
                  onChange={e => this.setState({ newTodo: e.target.value })}
                  value={this.state.newTodo}
                />
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Chat;
