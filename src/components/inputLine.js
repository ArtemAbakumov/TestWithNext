import React, {Component} from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const InputStyle = styled.div`
text-align:center;
border-radius:5px;
margin:5px;
font-size:20px;
`

class PhoneInput extends Component {
      state = {value: ''};
       onChange = this.onChange.bind(this)
    
 
    onChange(e){
       const re = /^[0-9\b]+$/;
       if (e.target.value == '' || re.test(e.target.value)) {
          this.setState({value: e.target.value})
       }
    }
 
    render(){
      return ( 
        <InputStyle>   
         <input type='tel' value={this.state.value} onChange={this.onChange}/>
        </InputStyle>
      )    
    }     
 }
 export default PhoneInput