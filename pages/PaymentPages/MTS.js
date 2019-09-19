import React, { createContext, useState, useMemo, useCallback } from 'react'
import {state} from '../../src/components/OperatorsList/Operators'
import Layout from '../index'
import Header from '../../src/components/Header/Header'
import styled from 'styled-components'
import { useRouter } from 'next/router';

const MtsPage = styled.div`
text-align:center;
`

const Content = (props) => {
  let router = useRouter();
  console.log(state.operators)
  const operators= state.operators
  return (
    <MtsPage>
    <Header />
      
      <h1>Оплата {state.operators[0].name}</h1>
      
    </MtsPage>
  );
};

const MTS = () => (

     <Content />
 
);
export default MTS