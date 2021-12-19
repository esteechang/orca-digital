import { createGlobalStyle } from 'styled-components';

import PalosecoMedium from './Paloseco-Medium.ttf';
import PalosecoLight from './Paloseco-Light.ttf';

import LTAmberRegular from './LT-Amber-Regular.otf';
import LTAmberLight from './LT-Amber-Light.otf';

import MontserratMedium from './Montserrat-Medium.ttf';
import MontserratRegular from './Montserrat-Regular.ttf';

import Optima from './Optima.TTF';

export default createGlobalStyle`
    @font-face {
        font-family: 'PalosecoMedium';
        src: local('PalosecoMedium'),
        url(${PalosecoMedium}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'PalosecoLight';
        src: local('PalosecoLight'),
        url(${PalosecoLight}) format('truetype');
        font-style: normal;
    }

    @font-face {
    font-family: 'LTAmberRegular';
    src: local('LTAmberRegular'),
        url(${LTAmberRegular}) format("opentype");
    }

    @font-face {
    font-family: 'LTAmberLight';
    src: local('LTAmberLight'),
        url(${LTAmberLight}) format("opentype");
    }

    @font-face {
        font-family: 'MontserratMedium';
        src: local('MontserratMedium'),
        url(${MontserratMedium}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-style: normal;
    }

    @font-face {
        font-family: 'Optima';
        src: local('Optima'),
        url(${Optima}) format('truetype');
        font-style: normal;
    }
`;
