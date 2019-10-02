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

const SubmitButton = () => {
  return (
    <Link href="/index">
      <Button key={"submit"} id={"Submit"}>
        Submit
      </Button>
    </Link>
  );
};
export default SubmitButton;
