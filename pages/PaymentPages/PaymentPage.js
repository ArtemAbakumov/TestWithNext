import React, { useState } from "react";
import Header from "../../src/components/Header/Header";
import TelephoneInput from "../../src/components/inputLine";
import styled from "styled-components";
import { useRouter } from "next/router";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import OperatorTitle from "../../src/components/Title";

const PhoneInput = styled.div`
  text-align: center;
`;
const PaymentPage = props => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Header />
      <OperatorTitle name={router.query.name} />
      <PhoneInput>
        Ваш номер:
        <TelephoneInput
          mask="+7 (999) 999 99 99"
          value={router.query.phoneNumber}
        >
          {router.query.phoneNumber}
        </TelephoneInput>
        Введите сумму:
        <TelephoneInput placeholder="Введите сумму" mask={`${phoneNumber} р.`}>
          {phoneNumber}
        </TelephoneInput>
      </PhoneInput>

      <NumKeyboard setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
    </>
  );
};

export default PaymentPage;
