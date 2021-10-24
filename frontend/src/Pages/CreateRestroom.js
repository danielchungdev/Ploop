import React from 'react'
import Navbar from '../Components/Navbar'
import { useState, useEffect } from 'react'
import Input from '../Components/Input'
import '../Sass/main.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Slider, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Button from '../Components/Button'
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom'

export default function CreateRestroom() {
    let id = uuidv4();

    const [longitude, setLongitude] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [name, setName] = useState("")
    const [cleanliness, setCleanliness] = useState(1);
    const [ambience, setAmbience] = useState(1);
    const [crowdiness, setCrowdiness] = useState(50)
    const [dryingValue, setDryingValue] = useState(0)
    const [babyStation, setBabyStation] = useState(0)

    useEffect(()=>{
        if ("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(
                function (position){
                    setLongitude(position.coords.longitude)
                    setLatitude(position.coords.latitude)
                }
            )
        }
    }, [])

    const handleSlider = (event, newValue) => {
        setCrowdiness(newValue)
    }

    const handleDryingChange = (event) => {
        setDryingValue(event.target.value)
    }

    const handleBabyChange = (event) => {
        setBabyStation(event.target.value)
    }

    const bathroomName = (event) => {
        setName(event.target.value)
    }

    const submitForm = () => {
        if (name !== ""){
            alert("clicked")
            fetch('/api/bathroom/' + id.toString(), {
                method: "POST",
                headers:{
                    "Content-Type": "application/json", 
                },
                body: {
                    name: name,
                    cleanliness: cleanliness,
                    ambience: ambience,
                    crowdiness: crowdiness,
                    drying: dryingValue,
                    baby: babyStation,
                    longitude: longitude,
                    latitude: latitude
                }
            })
            .then((res)=>{
                console.log(res)
                if (res.status === 200){
                    history.push("/");
                } 
            })
            .catch((error)=>{
                console.log(error);
            })
        }
    }

    const history = useHistory();

    return (
        <div>
            <Navbar/>
            <div class="create--container">
                <form action="submit" className="create--form">
                    <div>
                        <Typography component="legend">Bathroom Name</Typography>
                        <input className = "input" onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div>
                    <Typography component="legend">Cleanliness</Typography>
                    <Rating
                        name="simple-controlled"
                        value={cleanliness}
                        onChange={(event, newValue) => {
                            setCleanliness(newValue);
                        }}
                    />
                    </div>
                    <div>
                        <Typography component="legend">Ambience</Typography>
                        <Rating
                            name="simple-controlled"
                            value={ambience}
                            onChange={(event, newValue) => {
                                setAmbience(newValue);
                            }}
                        />
                    </div>

                    <div>
                        <Typography component="legend">Crowdiness</Typography>
                        <Slider sx={{color: "#7F5F20" }} value={crowdiness} onChange={handleSlider}/>
                    </div>

                    <div>
                        <Typography component="legend">Drying Method</Typography>
                        <RadioGroup row
                            aria-label="Drying Method"
                            name="radio-buttons-group"
                            onChange={handleDryingChange}
                        >
                            <FormControlLabel value="0" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Paper" />
                            <FormControlLabel value="1" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Dryer" />
                            <FormControlLabel value="2" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="None" />
                        </RadioGroup>
                    </div>

                    <div>
                        <Typography component="legend">Baby Station</Typography>
                        <RadioGroup row
                            aria-label="Drying Method"
                            name="radio-buttons-group"
                            onChange={handleBabyChange}
                        >
                            <FormControlLabel value="0" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Yes" />
                            <FormControlLabel value="1" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="No" />
                        </RadioGroup>
                    </div>
                </form>
                <div class="button-container">
                    <Button onClick={submitForm}>Create Bathroom</Button>
                </div>
            </div>
        </div>
    )
}
