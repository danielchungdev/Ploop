import {React, useState} from 'react'
import '../Sass/main.scss'
import logo from '../Assets/Ploop.svg'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {Link} from 'react-router-dom'

import {Dropdown, Menu} from 'antd'


const menu = (
    <Menu>
        <Menu.item key = '0'>
<div>
    hello
</div>
        </Menu.item>
        <Menu.item key = '1'>
<div>
    hello
</div>
        </Menu.item>
        <Menu.item key = '2'>
<div>
    hello
</div>
        </Menu.item>

    </Menu>
)

export default function Navbar() {
    return (
        <div className="navbar--container">
            <img src={logo} alt="Ploop Logo"/>
            <Dropdown overlay= {menu} trigger = {['click']}>
                <button>Click me</button>
            </Dropdown>
        </div>
    )
}
