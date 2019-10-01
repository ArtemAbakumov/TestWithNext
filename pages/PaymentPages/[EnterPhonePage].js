import React, { Fragment } from "react";
import { state } from "../../src/components/OperatorsList/Operators";
import Layout from "../index";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import TelephoneInput from "../../src/components/inputLine";
import NumKeyboard, { setSum } from "../../src/components/NumPad";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

const PaymentPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Fragment>
      <Header />
      <MtsPage>Оплата {router.query.EnterPhonePage}</MtsPage>
      <NumKeyboard />
    </Fragment>
  );
};

export default PaymentPage;
