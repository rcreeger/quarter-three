import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Home extends Component {
  state = {
    username: "",
    password: ""
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="text"
            name="email"
            id="exampleEmail"
            placeholder="E-Mail"
            on
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>
        <Button color="success" type="submit">
          Log-In
        </Button>
      </Form>
    );
  }
}

export default Home;
