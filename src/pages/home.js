import React, { useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import { useEffect } from 'react';
import Main from '../components/Main';

const Home = () => {
    const [loading, setLoading] = useState(true);
    // const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoading(false), 4000);
    }, []);

    // const toggle = () => {
    //     setIsOpen(!isOpen);
    // };

    return loading ? <LoadingScreen /> : <Main />;
};

export default Home;
