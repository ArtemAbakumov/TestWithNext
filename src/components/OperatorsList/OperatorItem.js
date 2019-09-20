import React from "react";
import styled from "styled-components";
import Link from "next/link";

const OperatorStyle = styled.a`
  text-align: center;
  border: 1px solid #0590ee;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
`;

const Operator = props => (
  <OperatorStyle href={props.link}>
    <img src={props.logo} alt={"Logo" + props.name} />
    {/* <Link href={`/name?name=${props.name}`}>
            <a>{props.name}</a>
        </Link> */}
    <div id={"Operator" + props.index}>{props.name}</div>
  </OperatorStyle>
);

export default Operator;
