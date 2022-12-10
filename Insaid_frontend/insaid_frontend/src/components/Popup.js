import React from 'react';
import './popup.css';
import PopupLeftPane from './PopupLeftPane';
import PopupRightPane from './PopupRightPane';

const Popup = () =>  {
    return (
        <div className='Popup'>
            <PopupLeftPane />
            <PopupRightPane />
        </div>
    )
}

export default Popup;