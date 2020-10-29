import React from 'react'

// Components
import Brand from '../Brand/Brand'
// Styled
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Container from '../Container/Container'

const Dashboard = (): JSX.Element => {
    return (
        <>
            <GlobalStyle />
            <Container>
                <Brand />
            </Container>
        </>
    )
}

export default Dashboard
