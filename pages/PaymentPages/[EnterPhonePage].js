import React, { Fragment, useState, useReducer } from "react";
import { state } from "../../src/components/OperatorsList/Operators";
import Layout from "../index";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import TelephoneInput from "../../src/components/inputLine";
import NumKeyboard from "../../src/components/NumPad";
import SubmitButton from "../../src/components/submitButton";
import OperatorTitle from "../../src/components/Title";
import UserContext from "../../src/components/UserContext";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;
const PhoneInput = styled.p`
  text-align: center;
`;
const EnterPhonePage = props => {
  const router = useRouter();
  const name = router.query.EnterPhonePage;

  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Fragment>
      <Header />
      <OperatorTitle name={name} />
      <PhoneInput>
        Введите ваш номер:{" "}
        <TelephoneInput
          mask="+7 (999) 999 99 99"
          placeholder="+7 (999) 999 99 99"
        >
          {phoneNumber}
        </TelephoneInput>
      </PhoneInput>

      <NumKeyboard setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
      <SubmitButton name={name} phoneNumber={phoneNumber} />
    </Fragment>
  );
};

export default EnterPhonePage;
