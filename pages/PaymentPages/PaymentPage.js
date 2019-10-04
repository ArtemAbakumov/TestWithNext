import React, { useReducer } from "react";
import Header from "../../src/components/Header/Header";
import styled from "styled-components";
import { useRouter } from "next/router";
import NumKeyboard, { setSum } from "../../src/components/NumPad";
import OperatorTitle from "../../src/components/Title";
import { usePhoneNumberReducer } from "../../src/usePhoneNumberReducer";

const MtsPage = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

// export const operatorPaht = router.query.EnterPhonePage;

const PaymentPage = ({ setPhoneNumber, phoneNumber }) => {
  const router = useRouter();

  const [state, dispatch] = usePhoneNumberReducer();

  console.log("asdsadsad", state);

  return (
    <>
      <Header />
      <OperatorTitle name={router.query.name} />
      <NumKeyboard setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
      <button onClick={() => dispatch({ type: "reset", payload: 10 })}>
        TEASJKDLKAJSD
      </button>
    </>
  );
};

export default PaymentPage;
