import React from 'react'
import styled from 'styled-components'

const SocialMediaBar = () => {
  return (
    <Container>
        <Left> <Logo>Web<Highlight>Site</Highlight></Logo> </Left>
        <Right>
            <SM xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30">    
              <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z"/>
            </SM>

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
   // border: 1px solid black;
`
const Highlight = styled.span`
    color: #fdbe34;
`

// Righ Side =================
const Right = styled.div`
    background-color: #785abe52;
    flex:1;
    width:100%;
    height: 100%;
`

const SM = styled.svg`
    width: 20px;
    height: 20px; 
`

export default SocialMediaBar