import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header/Header";
// import Operators from "../src/components/OperatorsList/Operators";
import Layout from "./Layout";
import dynamic from "next/dynamic";

const LayoutStyle = styled.div``;

const Operators = dynamic(
  () => import("../src/components/OperatorsList/Operators"),
  {
    loading: () => <div>loading...</div>
  }
);

// class Layout extends Component{
//     render(){
//         return(
//             <LayoutStyle>
//                 <Header />
//                 <Operators />
//             </LayoutStyle>
//         )
//     }
// }

// export default Layout

const Index = () => (
  <Layout>
    <Operators />
  </Layout>
);

export default Index;
