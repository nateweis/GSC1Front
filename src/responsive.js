import {css} from 'styled-components'

export const tablet = (props) => {
    return css`
        @media only screen and (min-width: 425px){
            ${props}
        }
    `;
}

export const desc = (props) => {
    return css`
        @media only screen and (min-width: 840px){
            ${props}
        }
    `;
}

export const bigScreen = (props) => {
    return css`
        @media only screen and (min-width: 1440px){
            ${props}
        }
    `;
}