import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className='Ribbon'>
            <div className='RibbonText'>
                Data Science or Product Management: Which career is right for you? &nbsp;
                <button id='RequestCallback' className='CallbackButton'><b>Talk to an Expert</b></button>
            </div>
        </div>
    )
}

export default Header;