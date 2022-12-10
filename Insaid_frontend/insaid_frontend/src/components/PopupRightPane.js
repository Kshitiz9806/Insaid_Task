import React from 'react';
import './popupRightPane.css';
import { useState } from 'react';
import Axios from 'axios';

const PopupRightPane = (props) => {

    const url="http://localhost:8000/users/add";
    const [data, setData] = useState({
        name: "",
        email: "",
        program: "",
        mobile: ""
    })

    function handle(e) {
        const newData ={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e) {
        e.preventDefault();
        Axios.post(url, {
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            program: data.program
        }).then((res) => {
            console.log(res.data);
            if(res.status===200) {
                alert("Call Request Sent!");
            }
            else {
                alert("Some Error Occured!");
            }
        })
    }

    return (
        <div className='PopupRightPane'>
            <br />
            <div className='PopupRightText1'>Schedule a 1 on 1 consultation</div>
            <div className='PopupRightText2'>Request a Call Back</div>
            <form>
                <input onChange={e => handle(e)} id="mobile" value={data.mobile} name='Mobile' placeholder='Mobile'pattern='[0-9]{10}' className='PopupRightInputBox' />
                <input onChange={e => handle(e)} id="name" value={data.name} name='Name' placeholder='Name' className='PopupRightInputBox' />
                <input onChange={e => handle(e)} id="email" value={data.email} name='Email' placeholder='Email'  type='email' className='PopupRightInputBox' />
                <select onChange={e => handle(e)} id="program" value={data.program} name='Program' className='PopupRightInputBox' placeholder='----Select Program----'>
                    <option value=''>----Select Program----</option>
                    <option value='Data Science'>Data Science</option>
                    <option value='Product Management'>Product Management</option>
                </select>
                <button className='PopupRightSubmitButton' onClick={(e) => {submit(e);props.setTrigger(false)}}>Call Me Back</button>
            </form>
        </div>
    )
}

export default PopupRightPane