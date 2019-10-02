import React, { Fragment } from "react";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import { Path } from "../../src/components/submitButton";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

const OperatorTitle = props => {
  return (
    <MtsPage key={"Title"} id={"id"} name={props.name}>
      Оплата {props.name}
    </MtsPage>
  );
};

export default OperatorTitle;
