import React from 'react'
import './popupRightPane.css'

const PopupRightPane = () => {
    return (
        <div className='PopupRightPane'>
            <br />
            <div className='Text1'>Schedule a 1 on 1 consultation</div>
            <div className='Text2'>Request a Call Back</div>
            <form>
                <input name='Mobile' placeholder='Mobile' type='tel' pattern='[0-9]{10}' className='InputBox' />
                <input name='Name' placeholder='Name' className='InputBox' />
                <input name='Email' placeholder='Email'  type='email' className='InputBox' />
                <select name='Program' className='InputBox' placeholder='----Select Program----'>
                    <option value=''>----Select Program----</option>
                    <option value='Data Science'>Data Science</option>
                    <option value='Product Management'>Product Management</option>
                </select>
                <button className='SubmitButton'>Call Me Back</button>
            </form>
        </div>
    )
}

export default PopupRightPane