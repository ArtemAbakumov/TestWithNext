import React, { Fragment } from "react";
import { state } from "../../src/components/OperatorsList/Operators";
import Layout from "../index";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import TelephoneInput from "../../src/components/inputLine";
import NumKeyboard from "../../src/components/NumPad";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

const Content = props => {
  let router = useRouter();
  // console.log(state.operators)
  const operators = state.operators;
  return (
    <Fragment>
      <Header />
      <MtsPage>Оплата {state.operators[0].name}</MtsPage>
      <TelephoneInput />
      <NumKeyboard />
    </Fragment>
  );
};

const MTS = () => <Content />;
export default MTS;
