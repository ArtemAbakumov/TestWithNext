import React, { useState } from "react";
import Header from "../../src/components/Header/Header";
import TelephoneInput from "../../src/components/inputLine";
import styled from "styled-components";
import { useRouter } from "next/router";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import OperatorTitle from "../../src/components/Title";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

// export const operatorPaht = router.query.EnterPhonePage;

const PaymentPage = props => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Header />
      <OperatorTitle name={router.query.name} />
      <TelephoneInput>Ваш номер: {router.query.phoneNumber}</TelephoneInput>
      <TelephoneInput>Введите сумму: {phoneNumber} р.</TelephoneInput>
      <NumKeyboard setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
    </>
  );
};

export default PaymentPage;
