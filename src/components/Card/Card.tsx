import styled from 'styled-components'
import { darkerGrey } from '../GlobalStyle/GlobalStyle'

type DivProps = {
    height: number
    dark?: boolean
}

const Card = styled.div<DivProps>`
    margin-top: 20px;
    padding: 20px;
    background-color: ${({ dark }): string => (dark ? darkerGrey : 'white')};
    box-shadow: 0px 3px 5px ${({ dark }): string => (dark ? 'black' : 'white')};
    box-sizing: border-box;
    ${({ height }) => height && `height: ${height}px;`}

    @media(max-width: 1200px) {
        padding: 10px;
    }
`

export default Card
