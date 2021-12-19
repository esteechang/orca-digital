import React, { useCallback, useEffect, useRef } from 'react';
import {
    ModalWrapper,
    CloseModalButton,
    TopText,
    BottomText,
} from './Modal.styles';

import OrcaLogoGold from '../../assets/images/orca-logo-gold.png';

const ReviewSubmittedModal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
                console.log('I pressed');
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <div onClick={closeModal} ref={modalRef}>
            <ModalWrapper showModal={showModal}>
                <div style={{ flexDirection: 'row', textAlign: 'center' }}>
                    <TopText>Thank You</TopText>
                    <BottomText>for your feedback</BottomText>
                </div>
                <div
                    style={{
                        color: 'white',
                        position: 'absolute',
                        bottom: 20,
                    }}
                >
                    <p
                        style={{
                            display: 'inline',
                            fontSize: 15,
                            textAlign: 'start',
                            marginBottom: 120,
                            justifyContent: 'center',
                            fontWeight: 100,
                        }}
                    >
                        Powered by
                    </p>
                    <a
                        href="//orcadigitalsg.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={OrcaLogoGold}
                            alt="logo"
                            style={{
                                width: 80,
                                marginLeft: 10,
                            }}
                        />
                    </a>
                    <a
                        href="//orcadigitalsg.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            color: 'white',
                            marginTop: 20,
                            display: 'block',
                            textDecoration: 'none',
                            borderBottom: '1px solid white',
                            paddingBottom: '5px',
                            width: '150px',
                        }}
                    >
                        https://orcadigitalsg.com
                    </a>
                </div>
                <CloseModalButton
                    aria-label="Close modal"
                    onClick={() => setShowModal((prev) => !prev)}
                />
            </ModalWrapper>
        </div>
    );
};

export default ReviewSubmittedModal;
