import Layout from '../index'
import Header from '../../src/components/Header/Header'
import styled from 'styled-components'

const MtsPage = styled.div`
`

export default function MTS(props) {
 
    return (
      <MtsPage>
      <Header />
        <p>This is the about page</p>
      </MtsPage>
    );
  
  }