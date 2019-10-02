import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../src/components/Header/Header";
import Layout from "./Layout";
import dynamic from "next/dynamic";
import Operators from "../src/components/OperatorsList/Operators";

const Index = () => (
  <Layout>
    <Operators />
  </Layout>
);

export default Index;
