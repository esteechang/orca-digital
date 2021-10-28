import React from 'react';
import { Container, PulseDiv } from './styles';
import OrcaIcon from '../../assets/images/orca-favicon.png';

const LoadingScreen = () => {
    return (
        <Container >
            <PulseDiv>
                <img src={OrcaIcon} alt="orca-icon" style={{ width: 150 }} />
            </PulseDiv>
        </Container>
    );
};

export default LoadingScreen;
