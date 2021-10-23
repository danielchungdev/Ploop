import React,{useState} from 'react'
import logo from '../Assets/Ploop.svg'

import '../Sass/main.scss'
import { Link } from 'react-router-dom'

import Button from '../Components/Button'
import Input from '../Components/Input'

import axios from "axios";


import { Typography } from '@material-ui/core'
import { SettingsSharp } from '@material-ui/icons'

export default function Signin(){

        return(
            <div className = "signin--container" >
                <img src={logo} alt="Ploop Logo"  className="signin--logo"/>
                <form>
                    <Input label = "Username"/>
                    <div style = {{marginBottom:'10vh'}}>
                        <Input label = "Password"/>
                    <div className = "forgot--password">
                        <Typography component="legend"  className = "signin--link">
                            Forgot Password?
                        </Typography>
                    </div>
                </div>
                    <Button>Log In</Button>        
                    <Typography component="legend"  className = "forgot--password">
                        Don't have an account? &#160;<Link to="/signup" className = "signin--link">Sign up</Link>
                    </Typography>
                </form>
            </div>
        )
    }