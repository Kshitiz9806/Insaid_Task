import React from 'react';
import CloseButton from './CloseButton';
import './popup.css';
import PopupLeftPane from './PopupLeftPane';
import PopupRightPane from './PopupRightPane';

const Popup = () =>  {
    return (
        <div className='Popup'>
            <PopupLeftPane />
            <PopupRightPane />
            <CloseButton />
        </div>
    )
}

export default Popup;