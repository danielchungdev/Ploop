import React from 'react'

import StarFilled from '../Assets/Defaults/star.png'
import StarBlank from '../Assets/Defaults/star_blank.png'

import '../Sass/main.scss'


export default function Star(props){
    let ssize = ""
    let ssrc = StarFilled
    if(props.size==="small"){
        ssize = "2vh"
    }
    else{
        ssize = "4vh"
    }

    if(props.filled == false){
        ssrc = StarBlank
    }
    
    return(
        <img src = {ssrc} alt = "star" className = "star" style = {{width:ssize}}/>
    )
}

