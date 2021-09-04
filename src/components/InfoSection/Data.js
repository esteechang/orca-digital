import Img1 from '../../assets/images/growth-curve.svg';
import Img2 from '../../assets/images/svg-2.svg';
import Img3 from '../../assets/images/svg-4.svg';

export const homeObjOne = {
    id: 'about',
    locationId:'contact', 
    lightBg: false,
    lightText: true,
    lightTextDescription: true,
    topLine: 'Premium Marketing Services',
    headline: 'Creating waves for businesses',
    description:
        'At Orca, our mission is to combine imaginative with intelligent strategies to give your brand a voice and connect with your clients.',
    buttonLabel: 'Get started',
    imgStart: false, //switch this to true if you want the pic on the left , false to be on right
    img: Img1,
    alt: 'img 1',
    dark: true,
    primary: true,
    darkText: false,
};

export const homeObjTwo = {
    id: 'before-services',
    lightBg: true,
    lightText: false,
    lightTextDescription: false,
    topLine: 'Unlimted Access',
    headline: 'xxxxx xxx xxxxxx headline here',
    description: 'Check out our past services xxx x xxxx xxxx',
    buttonLabel: 'Get started',
    imgStart: true, //switch this to true if you want the pic on the left , false to be on right
    img: Img2,
    alt: 'img 2',
    dark: false,
    primary: false,
    darkText: true,
};

export const homeObjThree = {
    id: 'careers',

    // lightBg: false,
    // lightText: true,
    // lightTextDescription: true,
    // topLine: 'PRODUCTS',
    // headline: 'check out our products xxxx ',
    // description:
    //     'apple orange pear lemon kiwi grapes ',
    // buttonLabel: 'Start Now',
    // imgStart: false, //switch this to true if you want the pic on the left , false to be on right
    // img: Img3,
    // alt: 'img 3',
    // dark: true,
    // primary: true,
    // darkText: false,
};
