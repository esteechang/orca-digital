import React, { useEffect } from 'react';
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
import ContactModal from '../ContactModal';
import { useState } from 'react';
import { Container } from '../ContactModal/styles';

const Navbar = ({ toggle }) => {
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
                        <NavLogo to="/" onClick={toggleHome}>
                            <NavIcon src={OrcaLogoGold} />
                        </NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars color="#fff" />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinkToPage to="/about-us">
                                    About
                                </NavLinkToPage>
                            </NavItem>

                            <NavItem>
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
                            </NavItem>

                            <NavItem>
                                <ContactNavButton onClick={openModal}>
                                    Contact
                                </ContactNavButton>
                            </NavItem>

                            <NavItem>
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
                            </NavItem>
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
