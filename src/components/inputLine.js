import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";
// import 'react-phone-number-input/style.css'
// import PhoneInput from 'react-phone-number-input'

const InputStyle = styled.div`
  text-align: center;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
`;

// class TelephoneInput extends Component {
const TelephoneInput = props => {
  // state = {value: ''};
  //  onChange = this.onChange.bind(this)

  //  onChange(e){
  //     const re = /^[0-9\b]+$/;
  //     if (e.target.value == '' || re.test(e.target.value)) {
  //        this.setState({value: e.target.value})
  //       }
  //    }

  // const value= this.state.value
  return <div>asdas{props.value}</div>;
};
export default TelephoneInput;
