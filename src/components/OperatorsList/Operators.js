import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Operator from "../OperatorsList/OperatorItem";
import Layout from "../../../pages/Layout";
// import UserContext from "../components/UserContext";

const OperatorsStyle = styled.span`
  padding: 20px;
  margin: 0 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-grow: 1;
  border: 2px solid #0590ee;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  text-align: center;
  padding-top: 100px;
`;

const Operators = props => {
  const state = {
    operators: [
      {
        name: "MTS",
        link: "/PaymentPages/MTS",
        logo: "/static/MTS.png"
      },
      {
        name: "BeeLine",
        link: "/BeeLine",
        logo: "/static/BeeLine.png"
      },
      {
        name: "Tele2",
        link: "/Tele2",
        logo: "/static/Tele2.png"
      },
      {
        name: "Megafon",
        link: "/Megafon",
        logo: "/static/Megafon.png"
      }
    ]
  };

  const operators = state.operators;

  return (
    <Fragment>
      <Headline>Выберите оператора</Headline>

      <OperatorsStyle>
        {operators.map((operator, index) => {
          return (
            <Operator
              key={index}
              index={index}
              name={operator.name}
              link={operator.link}
              logo={operator.logo}
            />
          );
        })}
      </OperatorsStyle>
    </Fragment>
  );
};
// }

export default Operators;
