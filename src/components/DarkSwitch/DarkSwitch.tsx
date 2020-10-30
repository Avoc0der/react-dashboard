import React, { useContext } from 'react'
import styled from 'styled-components'
// Context
// eslint-disable-next-line import/no-cycle
import { ThemeContext } from '../Dashboard/Dashboard'

type LabelProps = {
    dark: boolean
}

const DarkSwitchContainer = styled.div`
    position: absolute;
    right: 0px;
    top: 20px;
`
const Input = styled.input``
const Label = styled.label<LabelProps>`
    cursor: pointer;
    color: ${({ dark }) => (dark ? 'grey' : 'black')};
`

const DarkSwitch = (): JSX.Element => {
    const [theme, setTheme] = useContext(ThemeContext)
    const dark = theme === 'dark'
    return (
        <DarkSwitchContainer>
            <Label dark={dark}>
                <Input
                    type="checkbox"
                    onChange={(e): void => {
                        setTheme(e.target.checked ? 'dark' : 'light')
                    }}
                    checked={dark}
                />
                Dark Mode
            </Label>
        </DarkSwitchContainer>
    )
}

export default DarkSwitch
