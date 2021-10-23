import React from 'react'
import Navbar from '../Components/Navbar'

import DefaultToilet from '../Assets/Defaults/toilet.png'

import Star from '../Components/Star'
import CommendCard from '../Components/CommentCard'

import '../Sass/main.scss'



class Restroom extends React.Component{
    render(){
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

            <p className = "restroom--info">Location: Location location location</p>
                    
            {/***Cleanliness */}
            <div className = "restroom--info" style = {{marginTop:'2vh'}}>Cleanliness 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </div>

            {/***Ambiance */}
            <div className = "restroom--info">Ambiance 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </div>

            {/***Crowdedness */}
            <div className = "restroom--info">Crowdedness 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </div>

            {/***Lighting */}
            <div className = "restroom--info">Lighting 
                <div className = "star--display">
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                    <Star size = "small"/>
                </div>
            </div>

            <p className = "restroom--info">Blowdrying: yes</p>
            <p className = "restroom--info">Baby Station: yes</p>
            <p className = "restroom--info">Visits: 0</p>

        <p className = "restroom--info" style = {{marginTop:'4vh'}}>
            Comments
        </p>
        <CommendCard></CommendCard>

        </div>
    </div>
</div>)
    }
}
export default Restroom