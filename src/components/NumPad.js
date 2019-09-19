import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NumPadStyle = styled.div`
text-align:center;
border:1px solid #0590ee;
border-radius:5px;
margin:5px;
font-size:20px;
`


const NumPad = props => (
    <NumPadStyle>
      
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>0</span>
            <span>.</span>
            <span><</span>
     
        </NumPadStyle>

)

export default Operator