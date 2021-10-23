import React from 'react'
import Navbar from '../Components/Navbar'
import Input from '../Components/Input'
import Button from '../Components/Button'

class Settings extends React.Component{
    render(){
        return(<div>
            <Navbar/>

            {/**Profile picture and Name + Gender box */}
            <div className="settings--box">
                <img className = "settings--img" src = "https://img.icons8.com/ios/50/000000/full-of-shit.png" alt = "profile picture"/>
                <div style = {{margin:'2vh'}}>
                    <p className = "settings--name">Brandon Lu</p>
                    <p className= "settings--gender">Male</p>
                </div>
            </div>


            <div className = "settings--container">
        <form>
                <Input label = "Email"/>
        
        <div style={{marginTop:'2vh', marginBottom:'6vh'}}>
            <Input label = "Change Password"/>
            <Input label = "Confirm Password"/>
        </div>

    <Button>
        Save Changes
    </Button>

    <Button background = '#C70404'>
    Delete Account
    </Button>

</form>




            </div>
        </div>)
    }
}
export default Settings