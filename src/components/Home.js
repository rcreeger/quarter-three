import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from "reactstrap";

class Home extends Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("this", this);
    this.props.history.push("/chat");
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit} style={{ marginTop: 40 }}>
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
              <Button color="primary" type="submit">
                Log-In
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
