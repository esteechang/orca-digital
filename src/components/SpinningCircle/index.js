import React from 'react';
import './styles.css';
import OS1 from '../../assets/images/OS1.png';
import OS2 from '../../assets/images/OS2.png';
import OS3 from '../../assets/images/OS3.png';
import { Fade } from 'react-awesome-reveal';

const index = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <img
                        src={OS1}
                        alt="branding icon"
                        style={{ height: 110, width: 110 }}
                    />
                </div>

                <div className="box">
                    <img
                        src={OS2}
                        alt="digital marketing icon"
                        style={{ height: 110, width: 110 }}
                    />
                </div>
                <div className="box">
                    <img
                        src={OS3}
                        alt="ideation icon"
                        style={{ height: 110, width: 110 }}
                    />
                </div>
            </div>
            <div className="containerPhone">
                <div className="first-row">
                    <div className="box">
                        <img
                            src={OS2}
                            alt="branding icon"
                            style={{ height: 100, width: 100 }}
                        />
                    </div>
                    <Fade
                        
                        duration={2000}
                        delay={2000}
                        triggerOnce
                    >
                        <p> DIGITAL MARKETING</p>
                    </Fade>
                </div>
                <div className="second-row">
                    <div className="box">
                        <img
                            src={OS3}
                            alt="ideation icon"
                            style={{ height: 100, width: 90 }}
                        />
                    </div>

                    <div className="box">
                        <img
                            src={OS1}
                            alt="branding icon"
                            style={{ height: 90, width: 90 }}
                        />
                    </div>
                </div>
                <Fade duration={2000} delay={1500} triggerOnce>
                    <div className="third-row">
                        <p>IDEATION</p>
                        <p>BRANDING</p>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default index;
