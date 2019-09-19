import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import Operators from '../src/components/OperatorsList/Operators'


const LayoutStyle = styled.div `
`


class Layout extends Component{
    render(){
        return(
            <LayoutStyle>
                <Header />
                <Operators />
            </LayoutStyle>
        )
    }
}

export default Layout






// const Index = () => (
//     <div>
//       <p>Hello Next.js</p>
//     </div>
//   );
  
//   export default Index;