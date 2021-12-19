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
                        className="icon"
                    />
                </div>

                <div className="box">
                    <img
                        src={OS2}
                        alt="digital marketing icon"
                        className="icon"
                    />
                </div>
                <div className="box">
                    <img
                        src={OS3}
                        alt="web dev icon"
                        style={{width: 250}}
                    
                    />
                </div>
            </div>
            <div className="containerPhone">
                <div className="first-row">
                    <div className="box">
                        <img
                            src={OS2}
                            alt="branding icon"
                            className="icon-small"
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
                            alt="web dev icon"
                            className="icon-medium"
                        />
                    </div>

                    <div className="box">
                        <img
                            src={OS1}
                            alt="branding icon"
                            className="icon-small"
                        />
                    </div>
                </div>
                <Fade duration={2000} delay={1500} triggerOnce style={{width: '375px'}}>
                    <div className="third-row">
                        <p style={{textAlign: 'center'}} >WEB DEVELOPMENT</p>
                        <p>BRANDING</p>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default index;
