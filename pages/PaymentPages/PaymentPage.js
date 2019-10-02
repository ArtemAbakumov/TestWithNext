import React, { useContext } from "react";
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
  return (
    <>
      <Header />
      <OperatorTitle name={router.query.name} />
      <NumKeyboard />
    </>
  );
};

export default PaymentPage;
