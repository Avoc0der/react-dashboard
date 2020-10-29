import React from 'react'

// Components
import Brand from '../Brand/Brand'
// Styled
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Container from '../Container/Container'
import Card from '../Card/Card'

const Dashboard = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
                <Card height={400}>Charts goes here</Card>
                <Card height={400}>Table goes here</Card>
            </Container>
        </>
    )
}

export default Dashboard
