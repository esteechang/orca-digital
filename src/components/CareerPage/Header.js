import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavMenu,
    NavItem,
    NavLinks,
} from './HeaderStyles';

const Header = () => {


    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        ORCA
                    </NavLogo>

                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to="careers"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                            >
                                Careers
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Header;
