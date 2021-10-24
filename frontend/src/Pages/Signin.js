import React,{useState, useContext} from 'react'
import logo from '../Assets/Ploop.svg'

import '../Sass/main.scss'
import { Link, useHistory } from 'react-router-dom'

import Button from '../Components/Button'
import Input from '../Components/Input'
import { UserContext } from '../UserContext';

import { Typography } from '@material-ui/core'

export default function Signin(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const {user, setUser} = useContext(UserContext);

    const login = (e) => {
        e.preventDefault();
        fetch('/api/login/user?username=' + username + "&password=" + password, {
            method: "GET",
            headers:{
                "Content-Type": "application/json", 
            }
        })
        .then((res)=>{
            if (res.status === 404){
                setError(true);
            }
            if (res.status === 200){
                localStorage.setItem("user", username);
                setUser(username);
                history.push("/");
            } 
        })
        .catch((error)=>{
            console.log(error);
        })


    }
    
    const history = useHistory();


    return(
        <div className = "signin--container" >
            <img src={logo} alt="Ploop Logo"  className="signin--logo"/>
            <form>
                <Typography component="legend">Username</Typography>
                <input className = "input" onChange={e=>setUsername(e.target.value)}/>
                <div style = {{marginBottom:'10vh'}}>
                <Typography component="legend">Password</Typography>
                <input type="password" className = "input" onChange={e=>setPassword(e.target.value)}/>
                <div className = "forgot--password">
                    <Typography component="legend"  className = "signin--link">
                        Forgot Password?
                    </Typography>
                </div>
            </div>
                <button className = "button" type="submit" onClick={login}>Log In</button>        
                <Typography component="legend"  className = "forgot--password">
                    Don't have an account? &#160;<Link to="/signup" className = "signin--link">Sign up</Link>
                </Typography>
            </form>
        </div>
        )
    }