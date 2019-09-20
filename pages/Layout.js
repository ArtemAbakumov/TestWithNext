import Header from "../src/components/Header/Header";
import styled from "styled-components";

const LayoutStyle = styled.div``;

const Layout = props => (
  <LayoutStyle>
    <Header />
    {props.children}
  </LayoutStyle>
);

export default Layout;
