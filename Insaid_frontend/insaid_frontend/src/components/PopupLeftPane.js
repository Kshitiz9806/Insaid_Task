import React from 'react'
import './popupLeftPane.css'

const PopupLeftPane = () => {
    return (
        <div className='PopupLeftPane'>
            <br />
            <div className='PopupLeftText1'> Call Our Experts</div>
            <br />
            <div className='ContactInfo'>
                Data Science: <a href='tel:7063119228'>+91 7063119228</a>
                <br />
                <br />
                Product Management: <a href='tel:9625811095'>+91 9625811095</a>
            </div>
            <br />
            <div>
                <img src='https://www.insaid.co/wp-content/uploads/2021/12/checklist-popup-image2.png' alt='GuideBox' className='PopupLeftGuideBox'/>
            </div>
        </div>
    )
}

export default PopupLeftPane;