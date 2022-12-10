import React from 'react';
import './popup.css';
import PopupLeftPane from './PopupLeftPane';
import PopupRightPane from './PopupRightPane';

const Popup = (props) =>  {
    return (props.trigger) ? (
        <div className='Popup'>
            <PopupLeftPane />
            <button className='CloseButton' onClick={() => props.setTrigger(false)}>Close</button>
            <PopupRightPane setTrigger={props.setTrigger}/>
        </div>
    ) : "";
}

export default Popup;