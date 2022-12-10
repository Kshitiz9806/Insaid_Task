import React from "react";
import './leftpanel.css'


const LeftPanel = (props) => {
    return (
        <div className="LeftPane">
            <div className="Text1">Get your Dream Job with</div>
            <div className="Text2">Top Programs</div>
            <br />
            <div className="Text3">Learn with India's leading online school for working professionals</div>
            <br />
            <br />
            <button className="ChatButton" onClick={() => {props.setTrigger(true)}}>Talk to an Expert</button>
            <br />
            <br />
            <br />
            <div className="BlinkingText">
                <img src="https://www.insaid.co/wp-content/uploads/2020/10/h2teacher-50x50.png" alt="studying logo" className="Logo1"/>
                <div className="Text4">360 degree career support</div>
            </div>
        </div>
    )
}

export default LeftPanel;