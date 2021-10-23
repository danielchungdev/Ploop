import React from 'react'
import '../Sass/main.scss'
import logo from '../Assets/Ploop.svg'

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img src={logo} alt="Ploop Logo"/>
        </div>
    )
}
