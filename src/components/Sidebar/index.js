import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinkToPage,
} from './styles';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkToPage to="/" onClick={toggle}>
                        Home
                    </SidebarLinkToPage>
                    <SidebarLinkToPage to="/about-us" onClick={toggle}>
                        About
                    </SidebarLinkToPage>
                    <SidebarLinkToPage to="/#services" onClick={toggle}>
                        Services
                    </SidebarLinkToPage>
                    <SidebarLinkToPage to="/#contact" onClick={toggle}>
                        Contact
                    </SidebarLinkToPage>
                    {/* <SidebarLink to="careers" onClick={toggle}>
                        Join us
                    </SidebarLink>     */}
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
