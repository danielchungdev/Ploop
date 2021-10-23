import React from 'react'
import logo from '../Assets/Ploop.svg'

import '../Sass/main.scss'


import Button from '../Components/Button'
import Input from '../Components/Input'


class Signin extends React.Component{
    render(){
        return(
        <div className = "signin--container" >

            <img src={logo} alt="Ploop Logo"  className="signin--logo"/>

<form>
            <Input label = "Username"/>
            <div style = {{margin:'2vh 0vh 10vh 0vh'}}>
            <Input label = "Password"/>
            <div className = "forgot--password">
                <p className = "signin--link">
                Forgot Password?
                </p>
                </div>
</div>
            <Button>Log In</Button>
            
        <div className = "forgot--password">
            Don't have an account? &#160;<p className = "signin--link">Sign up</p>
            </div>

</form>
        </div>)
    }
}
export default Signin