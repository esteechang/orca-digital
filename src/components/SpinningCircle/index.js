import React from 'react';
import './styles.css';
import OS1 from '../../assets/images/OS1.png';

const index = () => {
    return (
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
                    src={OS1}
                    alt="branding icon"
                    style={{ height: 110, width: 110 }}
                />
            </div>
            <div className="box">
                <img
                    src={OS1}
                    alt="branding icon"
                    style={{ height: 110, width: 110 }}
                />
            </div>
        </div>
    );
};

export default index;
