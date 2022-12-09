import React, { Component } from 'react'
import './navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <div className='NavBar'>
                <img src="https://www.insaid.co/wp-content/uploads/2021/05/insaid-text-logo-2x.png" alt='Insaid Logo' className='InsaidLogo'/>
                <div className='Text'>
                    <b>Data Science &nbsp;&nbsp;&nbsp; Product Management &nbsp;&nbsp;&nbsp; For Corporate &nbsp;&nbsp;&nbsp; About INSAID &nbsp;&nbsp;&nbsp;</b>
                    <button className='LoginButton'>Login</button>
                </div>
            </div>
        )
    }
}
