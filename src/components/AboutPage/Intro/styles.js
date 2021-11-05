import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

export const Container = styled.div`
    background-color: #000;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const BackToTopArrow = styled(IoIosArrowUp)`
    color: #fff;
    position: fixed;
    z-index: 999;
    right: 0;
    margin-right: 50px;
    width: 60px;
    height: 60px;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-size: 65pt;
    font-family: 'PalosecoMedium';
    color: #fbbd14;
    margin-right: 30px;
    align-self: flex-start;
    margin-bottom: 145px;
`;

export const DividerContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ThickLine = styled.div`
    width: 5px;
    background-color: #fff;
    height: 225px;
    margin-top: 210px;
`;

export const ThinLine = styled.div`
    width: 1px;
    background-color: #fff;
    height: 215px;
    margin-left: 2px;
`;

export const Subtitle = styled.p`
    margin-left: 30px;
    font-size: 15pt;
    font-family: 'LTAmberLight';
    width: 550px;
    text-align: justify;
    margin-top: 80px;
`;
