import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavIcon,
    ContactNavButton,
    NavLinkToPage,
} from './styles';

import OrcaLogoGold from '../../assets/images/orca-logo-gold.png';
import OrcaLogoBlack from '../../assets/images/orca-logo-black.png';
import ContactModal from '../ContactModal';
import { useState } from 'react';
import { Container } from '../ContactModal/styles';

const Navbar = ({ toggle, about }) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        {about ? (
                            <NavLogo to="/" onClick={toggleHome} about>
                                <NavIcon src={OrcaLogoBlack} />
                            </NavLogo>
                        ) : (
                            <NavLogo to="/" onClick={toggleHome}>
                                <NavIcon src={OrcaLogoGold} />
                            </NavLogo>
                        )}
                        <MobileIcon onClick={toggle}>
                            <FaBars color="#fff" />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                {about ? (
                                    <NavLinkToPage to="/" about>
                                        Home
                                    </NavLinkToPage>
                                ) : (
                                    <NavLinkToPage to="/" >
                                        Home
                                    </NavLinkToPage>
                                )}
                            </NavItem>
                            <NavItem>
                                {about ? (
                                    <NavLinkToPage to="/about-us" about>
                                        About
                                    </NavLinkToPage>
                                ) : (
                                    <NavLinkToPage
                                        to="/about-us"
                                        target="_blank"
                                    >
                                        About
                                    </NavLinkToPage>
                                )}
                            </NavItem>

                            <NavItem>
                                {about ? (
                                    <NavLinks
                                        to="/#services"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        about
                                    >
                                        Services
                                    </NavLinks>
                                ) : (
                                    <NavLinks
                                        to="/#services"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        Services
                                    </NavLinks>
                                )}
                            </NavItem>

                            <NavItem>
                                {about ? (
                                    <ContactNavButton onClick={openModal} about>
                                        Contact
                                    </ContactNavButton>
                                ) : (
                                    <ContactNavButton onClick={openModal}>
                                        Contact
                                    </ContactNavButton>
                                )}
                            </NavItem>

                            {/* <NavItem>
                                {about ? (
                                    <NavLinks
                                        to="careers"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        about
                                    >
                                        Join Us
                                    </NavLinks>
                                ) : (
                                    <NavLinks
                                        to="careers"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        Join Us
                                    </NavLinks>
                                )}
                            </NavItem> */}
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
                {showModal ? (
                    <Container>
                        <ContactModal
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    </Container>
                ) : (
                    ''
                )}
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
