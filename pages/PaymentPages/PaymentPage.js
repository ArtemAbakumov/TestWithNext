import React, { useReducer } from "react";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import OperatorTitle from "../../src/components/Title";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

// export const operatorPaht = router.query.EnterPhonePage;

const PaymentPage = () => {
  const router = useRouter();

  const initialState = "";
  const reducer = (state, action) => action;

  const [phoneNumber, setPhoneNumber] = useReducer(reducer, initialState);
  return (
    <>
      <Header />
      <OperatorTitle name={router.query.name} />
      <NumKeyboard setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
    </>
  );
};

export default PaymentPage;
