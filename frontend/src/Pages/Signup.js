import React from 'react'

import '../Sass/main.scss'

import Button from '../Components/Button'
import Input from '../Components/Input'
import Radio from '../Components/Radio'

class Signup extends React.Component{
    render(){
        return(<div className = "signup--container">



<div className = "create-an-account">
Create an Account</div>





<form>
        <Input label = "Username"/>
            <div style = {{margin:'4vh 0vh 2vh 0vh'}}>
            <Input label = "Password"/>
            </div>
            <Input label = "Confirm Password"/>



            <div className = "label" style = {{marginTop:'4vh'}}>Gender</div>
            <Radio label = "Male"/>
            <Radio label = "Female"/>

            <Radio label = "Other"/>

            <div style = {{margin:'6vh 0vh 4vh 0vh'}}>
            <Input label = "Email"/>
            </div>

            <Button>
                Create Account
            </Button>






</form>

        </div>)
    }
}
export default Signup