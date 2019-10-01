import React, { Component, useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = styled.div`
  margin: 0 auto;
  text-align: center;

  width: 290px;
  background-color: #0590ee;
  border: 2px solid black;
  border-radius: 5px;
`;

const SubmitButton = () => {
  return (
    <Button key={"submit"} id={"Submit"} href="/index">
      <Link href="/index">Submit</Link>
    </Button>
  );
};
export default SubmitButton;
