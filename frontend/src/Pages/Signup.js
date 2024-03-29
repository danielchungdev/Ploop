import React, {useState} from 'react'
import '../Sass/main.scss'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function Signup() {
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [gender, setGender] = useState("0")
    const [email, setEmail] = useState("")

    const [error, setError] = useState(false)

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const checkPassword = () => {
        if (password == ""){
            return false
        }
        else if (password == confirmPassword){
            return true
        }
        else{
            return false
        }
    }

    const checkEmailValid = () => {
        //check if email is valid
        // return true or false
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)){
            console.log(email)
            return true
        }
        else{
            console.log(email)
            return false
        }
    }

    const createAccount = () => {
        if (checkPassword() && checkEmailValid()){
            fetch("http://localhost:5000/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json", 
                },
                body: {
                    "Username": username,
                    "Password": password,
                    "Email": email,
                    "Gender": gender
                }
            })
            .then((res)=>{
                if (res.status === 404){
                    setError(true)
                }
                if (res.status === 200){
                    history.push("/signin");
                }
                
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            alert("woops there's been an error")
        }
    }

    const history = useHistory()

    return (
        <div>
            <div className = "signup--container">
                <Typography component="legend"  className = "create-an-account">
                    Create an Account
                </Typography>
                <form>
                    <Typography component="legend">Username</Typography>
                    <input className = "input" onChange={e=>setUsername(e.target.value)}/>

                    <Typography component="legend">Password</Typography>
                    <input type="password" className = "input" onChange={e=>setPassword(e.target.value)}/>

                    <Typography component="legend">Confirm Password</Typography>
                    <input type="password" className = "input" onChange={e=>setConfirmPassword(e.target.value)}/>

                    <Typography component="legend"  className = "label" style = {{marginTop:'4vh'}}>Gender</Typography>

                    <RadioGroup row
                            aria-label="Drying Method"
                            defaultValue={gender}
                            name="radio-buttons-group"
                            onChange={handleGenderChange}
                        >
                        <FormControlLabel value="0" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Male" />
                        <FormControlLabel value="1" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Female" />
                        <FormControlLabel value="2" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Other" />
                    </RadioGroup>

                    <Typography component="legend">Email</Typography>

                    <input type="text" className="input" onChange={e=>setEmail(e.target.value)}/>

                    <button className = "button" type="submit" onClick={createAccount}>Create Account</button>        

                </form>
            </div>
        </div>
    )
}