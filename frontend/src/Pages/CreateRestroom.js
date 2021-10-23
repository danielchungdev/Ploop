import React from 'react'
import Navbar from '../Components/Navbar'
import { useState } from 'react'
import Input from '../Components/Input'
import '../Sass/main.scss'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Slider } from '@mui/material'

export default function CreateRestroom() {

    const [cleanliness, setCleanliness] = useState(1);
    const [ambience, setAmbience] = useState(1);
    const [crowdiness, setCrowdiness] = useState(50)

    const handleSlider = (event, newValue) => {
        setCrowdiness(newValue)
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
                        
                    </div>
                </form>
            </div>
        </div>
    )
}
