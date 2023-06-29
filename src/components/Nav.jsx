import React from 'react'
import styled from 'styled-components'
import {tablet, desc, bigScreen} from '../responsive'
import {ReactComponent as ILines} from '../downloads/lines-svgrepo-com.svg'

const Nav = () => {
  return (
    <Container>
        <Left>
            <LinkBtn><StyledIcon /></LinkBtn>

            <FullSize>
                <LinkContainer>
                    <LinksWrapper> <Link>Home</Link> </LinksWrapper>
                    <LinksWrapper> <Link>About</Link> </LinksWrapper>
                    <LinksWrapper> <Link>Projects</Link> </LinksWrapper>
                    <LinksWrapper> <Link>Blog</Link> </LinksWrapper>
                    <LinksWrapper> <Link>Contact</Link> </LinksWrapper>
                </LinkContainer>
            </FullSize>
        </Left>

        <Right></Right>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 65px;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    border: 1px solid white;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    //height: 100%;
    &:hover{
        background-color: orange;
        color: black;
    }
`
const Link = styled.a`
    
`

// Right side
const Right = styled(Sides)`
    background-color: green;
`




export default Nav
