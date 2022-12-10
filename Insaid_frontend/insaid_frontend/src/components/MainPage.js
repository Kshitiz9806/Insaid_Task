import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Navbar from "./Navbar";
import LeftPanel from "./LeftPanel";
import Popup from "./Popup";
import {useState} from 'react';
import RightPanel from "./RightPanel";

const MainPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div style={{background: "#eeeeee", height: "700px"}}>
            <Header setTrigger={setButtonPopup} />
            <Navbar />
            <div style={{display: "flex"}}>
                <LeftPanel setTrigger={setButtonPopup} />
                <RightPanel />
            </div>
            <br />
            <div>
                <font size="+1">
                    Need <b>help</b> choosing the right program? &nbsp;&nbsp; 
                    <a href="https://assist.insaid.co/form/NQ==" target="blank">
                        <button style={{width: "150px", height: "40px", background: "#cc33ff", borderRadius: "8px", cursor: "pointer"}}>
                            Take this short quiz
                        </button>
                    </a>
                </font>
            </div>
            <Footer />
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
    )
}
 
export default MainPage;