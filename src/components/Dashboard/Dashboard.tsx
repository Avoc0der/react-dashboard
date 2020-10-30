import React from 'react'

// Components
import Brand from '../Brand/Brand'
import Chart from '../Chart/Chart'
import VirtualizedTable from '../Table/Table'

// Styled
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Container from '../Container/Container'

const Dashboard = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
                <Chart />
                <VirtualizedTable />
            </Container>
        </>
    )
}

export default Dashboard
