import React, { useContext } from "react";
import styled from "styled-components";
import Link from "next/link";
import UserContext from "../UserContext";

const OperatorStyle = styled.div`
  text-align: center;
  border: 1px solid #0590ee;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
`;

const Operator = props => {
  // const { name, index } = useContext(UserContext);
  return (
    <Link
      href="/PaymentPages/[EnterPhonePage]"
      as={`/PaymentPages/${props.name}`}
    >
      <OperatorStyle>
        <img src={props.logo} alt={"Logo" + props.name} />
        <div id={"Operator " + props.index}>{props.name}</div>
      </OperatorStyle>
    </Link>
  );
};

export default Operator;
