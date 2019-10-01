import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const InputStyle = styled.form`
  text-align: center;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
`;
// class TelephoneInput extends Component {
function TelephoneInput(props) {
  return (
    <InputStyle>
      Ваш номер:
      <input type="text" name="fname"></input> {props.children}
    </InputStyle>
  );
}
export default TelephoneInput;
