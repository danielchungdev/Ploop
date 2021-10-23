import React from 'react'

import StarFilled from '../Assets/Defaults/star.png'
import StarBlank from '../Assets/Defaults/star_blank.png'

import '../Sass/main.scss'


export default function Star(props){
    let ssize = ""
    if(props.size==="small"){
        ssize = "2vh"
    }
    else{
        ssize = "4vh"
    }
    return(
        <img src = {StarFilled} alt = "star" className = "star" style = {{width:ssize}}/>
    )
}

