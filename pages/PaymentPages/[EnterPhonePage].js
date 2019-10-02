import React, { Fragment, useState } from "react";
import { state } from "../../src/components/OperatorsList/Operators";
import Layout from "../index";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import TelephoneInput from "../../src/components/inputLine";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import SubmitButton from "../../src/components/submitButton";
import OperatorTitle from "../../src/components/Title";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

const EnterPhonePage = props => {
  const router = useRouter();
  return (
    <Fragment>
      <Header />
      <OperatorTitle name={router.query.EnterPhonePage} />
      <NumKeyboard />
      <SubmitButton name={router.query.EnterPhonePage} />
    </Fragment>
  );
};

export default EnterPhonePage;
