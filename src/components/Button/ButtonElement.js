import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#fbbd14' : '#fff')};
    white-space: nowrap;
    width: 200px;
    padding: ${({ big }) => (big ? '14px 48px' : '8px 50px')};
   
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    font-size: 14pt;
    font-family: 'MontserratMedium';
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? '#fff' : '#fbbd14')};
    }
`;
