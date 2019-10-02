import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 290px;
  background-color: #0590ee;
  border: 2px solid black;
  border-radius: 5px;
  color: white;
`;

const handleClick = char => {
  if (char === "<<") return setSum("");
  else setSum(sum.concat(char));
};

export const Path = props => {
  return props.name;
};

const SubmitButton = props => {
  return (
    <Link
      href="/PaymentPages/PaymentPage"
      as={`/PaymentPages/${props.name}/EnterSum`}
    >
      <Button key={"submit"} id={"Submit"} name={props.name} onClick={null}>
        Submit
      </Button>
    </Link>
  );
};
export default SubmitButton;
