import React from 'react';
import './popup.css';
import PopupLeftPane from './PopupLeftPane';
import PopupRightPane from './PopupRightPane';

const Popup = (props) =>  {
    return (props.trigger) ? (
        <div className='Popup'>
            <PopupLeftPane />
            <PopupRightPane />
        </div>
    ) : "";
}

export default Popup;