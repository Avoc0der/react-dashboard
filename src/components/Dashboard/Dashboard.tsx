import React from 'react'

// Components
import Brand from '../Brand/Brand'
import Chart from '../Chart/Chart'
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
                <Chart />
                <Card height={400}>Table goes here</Card>
            </Container>
        </>
    )
}

export default Dashboard
