import React, { useState } from 'react'
import styled from 'styled-components'
import {tablet, desc, bigScreen} from '../responsive'
import {ReactComponent as ILines} from '../downloads/lines-svgrepo-com.svg'

const Nav = () => {
  const [screen, setScreen] = useState('home');
  const [showLinks, setShowLinks] = useState(false);

  return (
    <Container>
        <BarWrapper>
            <Left>
                <LinkBtn onClick={()=> setShowLinks(!showLinks)}> <StyledIcon /></LinkBtn>

                <FullSize>
                    <LinkContainer>
                        <LinksWrapper active={screen == 'home'? true: false} onClick={()=> setScreen('home')}> 
                            <Link>Home</Link> 
                        </LinksWrapper>
                        <LinksWrapper active={screen == 'about'? true: false} onClick={()=> setScreen('about')}> 
                            <Link>About</Link> 
                        </LinksWrapper>
                        <LinksWrapper active={screen == 'projects'? true: false} onClick={()=> setScreen('projects')}> 
                            <Link>Projects</Link> 
                        </LinksWrapper>
                        <LinksWrapper active={screen == 'blog'? true: false} onClick={()=> setScreen('blog')}> 
                            <Link>Blog</Link> 
                        </LinksWrapper>
                        <LinksWrapper active={screen == 'contact'? true: false} onClick={()=> setScreen('contact')}> 
                            <Link>Contact</Link> 
                        </LinksWrapper>
                    </LinkContainer>
                </FullSize>
            </Left>

            <Right></Right>
        </BarWrapper>

        <ExtendedMobileLinks show = {showLinks}>
            <MLinks active={screen == 'home'? true: false} onClick={()=> setScreen('home')}>Home</MLinks>
            <MLinks active={screen == 'about'? true: false} onClick={()=> setScreen('about')}>About</MLinks>
            <MLinks active={screen == 'projects'? true: false} onClick={()=> setScreen('projects')}>Projects</MLinks>
            <MLinks active={screen == 'blog'? true: false} onClick={()=> setScreen('blog')}>Blog</MLinks>
            <MLinks active={screen == 'contact'? true: false} onClick={()=> setScreen('contact')}>Contact</MLinks>
        </ExtendedMobileLinks>
        
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    
`
const BarWrapper = styled.div`
    height: 65px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    ${desc({backgroundColor: '#00043c', height: '85px'})}
`

const Sides = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
`
// Left side 
const Left = styled(Sides)`
    // background-color: pink;
    ${desc({flex: '2'})}
`

const LinkBtn = styled.div`
    color: #ffffff84;
    border: 1px solid #ffffff84;
    border-radius: 5px;
    margin-left: 4%;
    cursor: pointer;
    ${desc({display: 'none'})}
`
const StyledIcon = styled(ILines)`
    width: 15px;
    height: 15px;
    fill: #ffffff84;
    padding: 7px;
`

const FullSize = styled.div`
    color: white;
    display: none;
    width: 100%;
    height: 100%;
    ${desc({display: 'flex'})}
`
const LinkContainer = styled.div`
    //background-color: orange;
    width: 100%;
    display: flex;
    justify-content: space-around;
    //align-items: center;
    margin: 0 5%;
`
const LinksWrapper = styled.div`
    background-color: ${props => props.active && 'orange'};
    color: ${props => props.active && 'black'};
    cursor: pointer;
    //border: 1px solid white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    //transition: 1s all ease;
    position: relative;
    //height: 100%;
    &::before{
        background-color: orange;
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        //z-index: -10;
        transition:  0.3s all ease;
    };
    &:hover{color: black;};
    &:hover::before{
        width: 100%;
    }
`
const Link = styled.a`
     z-index: 2;
     
`

const ExtendedMobileLinks = styled.div`
    width: 100%;
    height: ${props => props.show? '200px': '0px'};
    background-color: black;
    display: flex;
    flex-direction: column;
    transition: .5s all ease;
    position: relative;
    justify-content: space-around;
    padding-left: 40px;
   // z-index: -5;
    //transform: ${props => props.show? 'translate(0px, 0px)': 'translate(0px, -200px)'};
`

const MLinks = styled.div`
    color: ${props => props.active? 'orange': '#a09d9d'};
    cursor: pointer;
    &:hover{color: white;};
`

// Right side
const Right = styled(Sides)`
    background-color: green;
`




export default Nav
