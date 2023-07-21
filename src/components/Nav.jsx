import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {tablet, desc, bigScreen} from '../responsive'
import {ReactComponent as ILines} from '../downloads/lines-svgrepo-com.svg'

const Nav = () => {
  const [screen, setScreen] = useState('home');
  const [showLinks, setShowLinks] = useState(false);


//   const handleResize = () => {
//     console.log(window.innerWidth)
//    // window.innerWidth > 840 && setShowLinks(false)
//   }

//   useEffect(() => {
//     window.addEventListener("resize", handleResize, false);
//   }, []);

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

            <Right>
                 <SearchBar placeholder='Search' />
            </Right>
        </BarWrapper>

        <ExtendedMobileLinks show = {showLinks} >
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
    margin-left: 15%;
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
    ${desc({display: 'none'})}
`

const MLinks = styled.div`
    color: ${props => props.active? 'orange': '#a09d9d'};
    cursor: pointer;
    &:hover{color: white;};
`

// Right side
const Right = styled(Sides)`
   //border: 1px solid white;
`
const InputWrapper = styled.div`
    //background-color: pink;
    width: 100%;
    height: 100%;
    position: relative;
`
const SearchBar = styled.input`
    display: inline-block;
    height: 50%;
    border-radius: 5px;
    width: 230px;
    padding-left: 5%;
    margin-right: 5%;
    //margin-top: 12px;
    font-size: 14px;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-size: 18px 18px;
        background-position: 95% center;
    ${desc({marginLeft: '10%'})};
    &:focus-visible{outline: none;};
`




export default Nav
