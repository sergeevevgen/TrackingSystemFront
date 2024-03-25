import styled from 'styled-components'

export const StyledButton = styled.button<{isRed: boolean}>`
    background-color: ${({isRed}) => {
        return isRed ? 'red' : 'blue'
    }};
    font-size: 14px;
`