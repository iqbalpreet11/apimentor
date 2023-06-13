import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import { Error } from '../pages/Error';

import Navbar from '../comp/Navbar';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { ScrollToTop } from '../ScrollToTop';
import { Modules } from '../pages/Modules';

function Weblayout(props) {

    return (
        <>
            <Navbar />
            <ScrollToTop/>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
                <Route path='/modules/*' element={<Modules/>} />
                <Route path="*" element={<Error />} />
            </Routes>

        </>
    );
}

export default Weblayout;