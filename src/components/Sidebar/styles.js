import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { Link as LinkS } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #fbbd14;
    display: grid;
    align-items: center;
    /* top: 0; */
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(IoIosArrowBack)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 2rem;
    left: 1rem;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
    outline: none; ;
`;

export const SidebarWrapper = styled.div`
    color: #fbbd14;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;

    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    font-family: 'MontserratMedium';
    
    &:hover {
        color: #fbbd14;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarLinkToPage = styled(HashLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;

    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    font-family: 'MontserratMedium';

    &:hover {
        color: #fff;
        transition: 0.2s ease-in-out;
    }
`;
