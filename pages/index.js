import React, {Component} from 'react';
import styled from 'styled-components'
import Header from '../src/components/Header/Header'
import Operators from '../src/components/OperatorsList/Operators'
import Layout from './Layout'

const LayoutStyle = styled.div`
`


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




const Index = props => (
      <Layout >
      <Operators />
    </Layout>
  );
  
  export default Index;