import {React, useState} from 'react'
import '../Sass/main.scss'
import logo from '../Assets/Ploop.svg'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'
import { SidebarData } from './SidebarData'

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img src={logo} alt="Ploop Logo"/>
        </div>
    )
}
