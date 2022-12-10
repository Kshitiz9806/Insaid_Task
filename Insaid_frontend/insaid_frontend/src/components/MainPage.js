import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Navbar from "./Navbar";
import LeftPanel from "./LeftPanel";
import Popup from "./Popup";
import {useState} from 'react';

const MainPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div>
            <Header setTrigger={setButtonPopup}/>
            <Navbar />
            <LeftPanel setTrigger={setButtonPopup}/>
            <Footer />
            <Popup trigger={buttonPopup}/>
        </div>
    )
}
 
export default MainPage;