import React, { useState, createContext } from 'react'
// Components
import Brand from '../Brand/Brand'
import Chart from '../Chart/Chart'
import VirtualizedTable from '../Table/Table'
import DarkSwitch from '../DarkSwitch/DarkSwitch'

// Styled
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import Container from '../Container/Container'

export const ThemeContext = createContext<any | null>(null)

const Dashboard = (): JSX.Element => {
    const themeState = useState<string>('light')
    const [theme, setTheme] = themeState
    const dark = theme === 'dark'
    return (
        <ThemeContext.Provider value={themeState}>
            <GlobalStyle dark={dark} />
            <Container>
                <Brand />
                <DarkSwitch />
                <Chart />
                <VirtualizedTable />
            </Container>
        </ThemeContext.Provider>
    )
}

export default Dashboard
