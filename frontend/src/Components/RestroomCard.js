import React from 'react'
import DefaultToilet from '../Assets/Defaults/toilet.png'
import '../Sass/main.scss'
import { Link } from 'react-router-dom'

import Restroom from '../Pages/Restroom'

import { Typography } from '@material-ui/core'

export default function RestroomCard(props) {

    return (
        <Link className='restroom-card' to = {`/${props.id}`} >
            <div className="restroom--container">
                <img className="toilet--image" src={DefaultToilet} alt="Image of toilet"/>
                <Typography component="legend" >{props.distance}</Typography>
                <Typography component="legend" >{props.stars}</Typography>
            </div>
        </Link>
    )
}
