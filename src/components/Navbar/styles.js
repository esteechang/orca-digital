import styled from 'styled-components';
import { Link as LinkRoute } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
    background: 'transparent';
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    width: 100%;
    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;

    height: 80px;
    z-index: 1;
    width: 100%;
    margin: 0 50px;

    justify-content: space-between;
`;

export const NavLogo = styled(LinkRoute)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 20px;
`;

export const NavIcon = styled.img`
    height: 50px;
`;

// this one is for the mobile header icon, won't display on webpage
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 2rem;
        cursor: pointer;
        color: #fbbd14;
    }
`;

// nav menu -- only for web
export const NavMenu = styled.ul`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    /* align-items: center; */
    list-style: none;
    /* text-align: center; */
    /* margin-right: 100; */
    right: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    margin-left: 36px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #fbbd14;
    display: flex;
    /* align-items: flex-end; */
    text-decoration: none;
    /* padding: 0 1rem; */
    height: 100%;
    cursor: pointer;
    margin-top: 50px;

    &.active {
        border-bottom: 3px solid #fbbd14;
    }

    &:hover {
        color: white;
        transition: 0.2s ease-in-out;
    }
    font-family: 'MontserratMedium';
    font-size: 14pt;
`;

export const ContactNavButton = styled.button`
    color: #fbbd14;
    cursor: pointer;
    margin-top: 50px;
    border: none;
    background-color: transparent;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #fff;
    }

    font-family: 'MontserratMedium';
    font-size: 14pt;
`;
