import React from 'react'

import '../Sass/main.scss'

import Button from '../Components/Button'
import Input from '../Components/Input'

class Signup extends React.Component{
    render(){
        return(
            <div className = "signup--container">
                <div className = "create-an-account">
                    Create an Account
                </div>
                <form>
                    <Input label = "Username"/>

                        <div style = {{marginTop:'4vh'}}>
                        <Input label = "Password"/>
                        </div>

                    <Input label = "Confirm Password"/>
                    <div className = "label" style = {{marginTop:'4vh'}}>Gender</div>

                    <div class="radio-container">
                        <div><input type="radio" name="male" value="0"/> male</div>
                        <div><input type="radio" name="male" value="1"/> female</div>
                        <div><input type="radio" name="male" value="2"/> other</div>
                    </div>

                    <div style = {{margin:'6vh 0vh 4vh 0vh'}}>
                        <Input label = "Email"/>
                    </div>

                    <Button>
                        Create Account
                    </Button>
                </form>
            </div>
        )
    }
}
export default Signup