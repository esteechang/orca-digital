import React from 'react';
import {
    Container,
    Column,
    Item,
    Icon,
    IconText,
    IconContainer,
    Blank,
} from './styles';
import icons from '../../icons';

const MoreServices = () => {
    return (
        <Container>
            <div>
                <Column>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[0]} alt="" />
                        </IconContainer>
                        <div>
                            <IconText>Corporate Identity</IconText>
                        </div>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[1]} alt="" />
                        </IconContainer>
                        <IconText>Creative & Prints</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[2]} alt="" />
                        </IconContainer>
                        <IconText>Brand Consultancy</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[3]} alt="" />
                        </IconContainer>
                        <IconText>Analytics</IconText>
                    </Item>
                    {/* <Icon src={MS1} alt="" /> */}
                </Column>
            </div>
            <div>
                <Column>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[4]} alt="" />
                        </IconContainer>
                        <IconText>Social Media Marketing</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[5]} alt="" />{' '}
                        </IconContainer>
                        <IconText>SEM Campaigns</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[6]} alt="" />{' '}
                        </IconContainer>
                        <IconText>SEO Campaigns</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[7]} alt="" />
                        </IconContainer>
                        <IconText>Content Writing</IconText>
                    </Item>
                </Column>
            </div>
            <div>
                <Column>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[8]} alt="" />
                        </IconContainer>
                        <IconText>Web Development</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[9]} alt="" />{' '}
                        </IconContainer>
                        <IconText>E-Commerce Web Design</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[10]} alt="" />
                        </IconContainer>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                marginTop: -10,
                            }}
                        >
                            <IconText>Content Management </IconText>
                            <IconText> System (CMS)</IconText>
                        </div>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[11]} alt="" />
                        </IconContainer>
                        <IconText>Landing Page / Microsite</IconText>
                    </Item>
                </Column>
            </div>
            <div>
                <Column>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[12]} alt="" />
                        </IconContainer>
                        <IconText>Photography</IconText>
                    </Item>
                    <Item>
                        <IconContainer>
                            <Icon src={icons[13]} alt="" />{' '}
                        </IconContainer>
                        <IconText>Videography</IconText>
                    </Item>
                    <Blank />
                </Column>
            </div>
        </Container>
    );
};

export default MoreServices;
