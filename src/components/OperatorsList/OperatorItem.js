import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const OperatorStyle = styled.a`
text-align:center;
border:1px solid #0590ee;
border-radius:5px;
margin:5px;
font-size:20px;
`

const Operator = props => (
    <OperatorStyle href={props.name}>
     
        
        <img src={props.logo} alt="logo" />
        {/* <Link href={`/name?name=${props.name}`}>
            <a>{props.name}</a>
        </Link> */}
        <div > 
            {props.name}
        </div>
    </OperatorStyle>

)

export default Operator