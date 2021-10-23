import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import Input from '../Components/Input'
import '../Sass/main.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Slider, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import Button from '../Components/Button'

export default function CreateRestroom() {

    const [cleanliness, setCleanliness] = useState(1);
    const [ambience, setAmbience] = useState(1);
    const [crowdiness, setCrowdiness] = useState(50)
    const [dryingValue, setDryingValue] = useState(0)
    const [babyStation, setBabyStation] = useState(0)

    const handleSlider = (event, newValue) => {
        setCrowdiness(newValue)
    }

    const handleDryingChange = (event) => {
        setDryingValue(event.target.value)
    }

    const handleBabyChange = (event) => {
        setBabyStation(event.target.value)
    }

    return (
        <div>
            <Navbar/>
            <div class="create--container">
                <form action="submit" className="create--form">
                    <div>
                        <Input label="Location Name"/>
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
                            defaultValue={dryingValue}
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
                            defaultValue={babyStation}
                            name="radio-buttons-group"
                            onChange={handleBabyChange}
                        >
                            <FormControlLabel value="0" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="Yes" />
                            <FormControlLabel value="1" control={<Radio sx={{color: "#7F5F20", '&.Mui-checked':{color: "#7F5F20"}}}/>} label="No" />
                        </RadioGroup>
                    </div>
                </form>
                <div class="button-container">
                    <Button>Create Bathroom</Button>
                </div>
            </div>
        </div>
    )
}
