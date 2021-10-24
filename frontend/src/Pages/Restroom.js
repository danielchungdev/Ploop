import React from 'react'
import Navbar from '../Components/Navbar'

import DefaultToilet from '../Assets/Defaults/toilet.png'

import Star from '../Components/Star'
import CommendCard from '../Components/CommentCard'

import { Typography } from '@material-ui/core'

import '../Sass/main.scss'



export default function Restroom(){
        return(
        <div>
            <Navbar/>
        <div className = "restroom--page--container">

<img src = {DefaultToilet} alt = "Toilet" className = "restroom--toilet"/>

    <div className = "star--display">
        <Star/>
        <Star/>
        <Star/>
        <Star/>
    </div>

<div className = "restroom--ratings">

            <Typography component="legend"  className = "restroom--info">Location: Location location location</Typography>
                    
            {/***Cleanliness */}
            <Typography component="legend"  className = "restroom--info" style = {{marginTop:'2vh'}}>Cleanliness 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </Typography>

            {/***Ambiance */}
            <Typography component="legend"  className = "restroom--info">Ambiance 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </Typography>

            {/***Crowdedness */}
            <Typography component="legend"  className = "restroom--info">Crowdedness 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </Typography>

           

            <Typography component="legend"  className = "restroom--info">Blowdrying: Yes</Typography>
            <Typography component="legend"  className = "restroom--info">Baby Station: Yes</Typography>
            <Typography component="legend"  className = "restroom--info">Reviews: 0</Typography>

        <Typography component="legend"  className = "restroom--info" style = {{marginTop:'4vh'}}>
            Comments
        </Typography>
        <CommendCard></CommendCard>

        </div>
    </div>
</div>)
    }

