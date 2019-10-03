import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import TelephoneInput from "../../src/components/inputLine";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: #0590ee;
  margin: 3px;
  border-radius: 3px;
  font-size: 20px;
  color: white;
`;
const Numpad = styled.div`
  margin: 20px auto;
  justify-content: center;
  width: 320px;
  background-color: #0590ee;
  border: 2px solid black;
  border-radius: 5px;
`;

const NumKeyboard = props => {
  // class NumKeyboard extends Component {
  const state = {
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
        char: "<<",
        id: "<<"
      }
    ],
    value: ""
  };

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [sum]);

  let [sum, setSum] = useState(state.value);
  const buttons = state.buttons;
  const handleClick = char => {
    if (char === "<<") return setSum("");
    else setSum(sum.concat(char));
  };
  return (
    <React.Fragment>
      <TelephoneInput>{sum}</TelephoneInput>

      <Numpad>
        {buttons.map((button, index) => {
          return (
            <Button
              key={index}
              id={"Num" + index}
              onClick={() => handleClick(button.char)}
            >
              {button.char}
            </Button>
          );
        })}
      </Numpad>
    </React.Fragment>
  );
};

export default NumKeyboard;
