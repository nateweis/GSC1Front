import React from 'react'
import styled from 'styled-components'
import {tablet, desc, bigScreen} from '../responsive'
import {ReactComponent as ILines} from '../downloads/lines-svgrepo-com.svg'

const Nav = () => {
  return (
    <Container>
        <Left>
            <LinkBtnWrapper><StyledIcon /> small</LinkBtnWrapper>
            <FullLinks>BIG</FullLinks>
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
    //background-color: pink;
    ${desc({flex: '2'})}
`

const LinkBtnWrapper = styled.div`
    color: #ffffff84;
    ${desc({display: 'none'})}
`
const StyledIcon = styled(ILines)`
    width: 15px;
    height: 15px;
    fill: #ffffff84;
`

const FullLinks = styled.div`
    color: blue;
    display: none;
    ${desc({display: 'block'})}
`


// Right side
const Right = styled(Sides)`
    background-color: green;
`






export default Nav
