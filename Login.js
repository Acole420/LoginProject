import React, { Component } from "react";
import { Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Text,
  H1,
  H2,
  H3
} from "native-base";
import Button from "./Button.js";
import Button2 from "./Button2.js";

export default class FormExample extends Component {
  state = {
    Username: "",
    Password: "",
    loginResult: "1",
    Incorrect: ""
  };

  handleChange = Username => event => {
    this.setState({
      [Username]: event
    });
  };

  performLogin = () => {
    const { Username, Password } = this.state;
    this.setState({ loginResult: "2" });
    //if (Username === "Adrian") {
    this.setState({ loginResult: "3" });
    if (Username === "Adrian" && Password === "1998") {
      Alert.alert(
        "Ingresado Correcto",
        Username + Password,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
      //IncorrectPass
      //}
      // if (Username === "adrian" && Password === "1998")
      // alert("usuario logueado");
    } else {
      Alert.alert("Error", "UsuarioIncorrecto", [
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]);
    }
  };
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                onChangeText={text => this.setState({ Username: text })}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={text => this.setState({ Password: text })}
              />
            </Item>
          </Form>
          <Button
            onPress={() => {
              this.performLogin();
            }}
          />
          <H3> No Tiene Cuenta? </H3>
          <Button2 />

          <Text>
            {this.state.loginResult}
          </Text>
        </Content>
      </Container>
    );
  }
}
