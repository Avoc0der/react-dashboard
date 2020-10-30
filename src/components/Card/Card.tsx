import styled from 'styled-components'
import { mediumGrey } from '../GlobalStyle/GlobalStyle'

type DivProps = {
    height: number
}

const Card = styled.div<DivProps>`
    margin-top: 20px;
    padding: 20px;
    background-color: white;
    box-shadow: 0px 3px 5px ${mediumGrey};
    box-sizing: border-box;
    ${({ height }) => height && `height: ${height}px;`}

    @media(max-width: 1200px) {
        padding: 10px;
    }
`

export default Card
