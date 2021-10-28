import { createGlobalStyle } from 'styled-components';

import PalosecoMedium from './Paloseco-Medium.ttf';
import LTAmberRegular from './LT-Amber-Regular.otf';
import MontserratMedium from './Montserrat-Medium.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'PalosecoMedium';
        src: local('PalosecoMedium'),
        url(${PalosecoMedium}) format('truetype');
        font-style: normal;
    }

    @font-face {
    font-family: 'LTAmberRegular';
    src: local('LTAmberRegular'),
        url(${LTAmberRegular}) format("opentype");
    }

    @font-face {
        font-family: 'MontserratMedium';
        src: local('MontserratMedium'),
        url(${MontserratMedium}) format('truetype');
        font-style: normal;
    }
`;
