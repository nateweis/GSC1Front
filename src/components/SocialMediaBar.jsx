import React from 'react'
import styled from 'styled-components'
import {ReactComponent as FbIcon} from '../downloads/icons8-facebook.svg'
import {ReactComponent as EmIcon} from '../downloads/email-svgrepo-com.svg'
import {ReactComponent as InIcon} from '../downloads/icons8-instagram.svg'
import {ReactComponent as TwIcon} from '../downloads/icons8-twitter.svg'

const SocialMediaBar = () => {
  return (
    <Container>
        <Left> <Logo>Web<Highlight>Site</Highlight></Logo> </Left>
        <Right>
            <FbIcon />
            <EmIcon />
            <InIcon />
            <TwIcon />
        </Right>
    </Container>
  )
}

// ///// Style ////////
const Container = styled.div` 
    height: 100px ;
   // border: 1px solid black;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    max-width: 720px;
    display: flex;
    align-items: center;
    justify-content: center;
`
// Left Side ============
const Left = styled.div`
   // background-color: #5c9da155;
    flex:1;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
`
const Logo = styled.a`
     color: #000000;
    font-weight: 800;
    font-size: 30px;
    line-height: 1;
    cursor: pointer;
   // border: 1px solid black;
`
const Highlight = styled.span`
    color: #fdbe34;
`

// Righ Side =================
const Right = styled.div`
    //background-color: #785abe52;
    flex:1;
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    svg {
        width: 20px;
        height: 20px;
        fill: #4d4d4d;
        border: 1px solid rgba(0,0,0,.2);
        margin: 0 4px;
        padding: 7px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            background-color: #fdbe34;
            fill: white;
            border-color: #fdbe34;
        }
  }
`



export default SocialMediaBar