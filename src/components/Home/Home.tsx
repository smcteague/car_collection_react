import React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import car_collection_image from '../../assets/images/undraw_electric_car_b-7-hl.svg'


interface Props {
    title: string;
}

const Root = styled('div')({
    padding: 0,
    margin: 0
})

const NavbarContainer = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
})

const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})

const LogoA = styled(Link)({
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})

const LogoNavigation = styled('h1')({
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(
        rgba(0,0,0,0.1),
        rgba(0,0,0,0.1)),
        url(${car_collection_image})`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
})




export const Home = (props: Props) => {
    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA to="/">Placeholder</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        <NavA to="/">Home</NavA>
                    </li>
                    <li>
                        <NavA to="/dashboard">Dashboard</NavA>
                    </li>
                    <li>
                        <NavA to="/signin">Sign In</NavA>
                    </li>
                    <li>
                        <NavA to="/signup">Sign Up</NavA>
                    </li>
                    <li>
                        <NavA to="/logout">Logout</NavA>
                    </li>
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <h1>{props.title}</h1>
                    <p>Collect Cars!</p>
                    <Button color='primary' variant='contained'>See Your Car Collection</Button>
                </MainText>
            </Main>
        </Root>
    )
}

