import React, { Component, Fragment } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #0590ee;
  margin: 3px;
  border-radius: 3px;
  font-size: 20px;
`;
const Numpad = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 320px;
  background-color: #0590ee;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
`;

// const NumKeyboard = () => {
class NumKeyboard extends Component {
  state = {
    buttons: [
      {
        char: "1",
        id: "1"
      },
      {
        char: "2",
        id: "2"
      },
      {
        char: "3",
        id: "3"
      },
      {
        char: "4",
        id: "4"
      },
      {
        char: "5",
        id: "5"
      },
      {
        char: "6",
        id: "6"
      },
      {
        char: "7",
        id: "7"
      },
      {
        char: "8",
        id: "8"
      },
      {
        char: "9",
        id: "9"
      },
      {
        char: "0",
        id: "0"
      },
      {
        char: "<",
        id: "<"
      }
    ],
    value: ""
  };

  handleClick = () => {
    return null; // {button.char}
  };

  render() {
    const buttons = this.state.buttons;
    return (
      <Numpad>
        {buttons.map((button, index) => {
          return (
            <Button key={index} id={"Num" + index} onClick={this.handleClick}>
              {button.char}
            </Button>
          );
        })}
      </Numpad>
    );
  }
}

export default NumKeyboard;
