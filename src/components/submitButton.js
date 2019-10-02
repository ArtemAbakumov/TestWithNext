import React, { Component, useState, useRef, useContext } from "react";
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

const SubmitButton = props => {
  const { name } = props;
  return (
    <Link
      href={{ pathname: "/PaymentPages/PaymentPage", query: { name } }}
      as={`/PaymentPages/${name}/PaymentPage`}
    >
      <Button key={"submit"} id={"Submit"}>
        Submit
      </Button>
    </Link>
  );
};
export default SubmitButton;
