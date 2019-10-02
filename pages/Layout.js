import Header from "../src/components/Header/Header";
import styled from "styled-components";
// import UserContext from '../src/components/UserContext'

const LayoutStyle = styled.div``;
// const ThemeContext = UserContext

const Layout = props => (
  <LayoutStyle>
    <Header />
    {props.children}
  </LayoutStyle>
);

export default Layout;
