import React from 'react'

import '../Sass/main.scss'

import Button from '../Components/Button'
import Input from '../Components/Input'

import { Typography } from '@material-ui/core'

class Signup extends React.Component{
    render(){
        return(
            <div className = "signup--container">
                <Typography component="legend"  className = "create-an-account">
                    Create an Account
                </Typography>
                <form>
                    <Input label = "Username"/>

                        <div style = {{marginTop:'4vh'}}>
                        <Input label = "Password"/>
                        </div>

                    <Input label = "Confirm Password"/>
                    <Typography component="legend"  className = "label" style = {{marginTop:'4vh'}}>Gender</Typography>

                    <div class="radio-container">
                        <Typography component="legend" ><input type="radio" name="male" value="0"/> male</Typography>
                        <Typography component="legend" ><input type="radio" name="male" value="1"/> female</Typography>
                        <Typography component="legend" ><input type="radio" name="male" value="2"/> other</Typography>
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