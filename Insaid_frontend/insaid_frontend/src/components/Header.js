import React from 'react';
import './header.css'

const Header = (props) => {
    return (
        <div className='Ribbon'>
            <div className='RibbonText'>
                Data Science or Product Management: Which career is right for you? &nbsp;
                <button id='RequestCallback' className='CallbackButton' onClick={() => {props.setTrigger(true)}}><b>Talk to an Expert</b></button>
            </div>
        </div>
    )
}

export default Header;