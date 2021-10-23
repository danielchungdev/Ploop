import React from 'react'
import DefaultToilet from '../Assets/Defaults/toilet.png'
import '../Sass/main.scss'
import { Link } from 'react-router-dom'

export default function RestroomCard(props) {

    return (
        <Link className='restroom-card'>
            <div className="restroom--container">
                <img className="toilet--image" src={DefaultToilet} alt="Image of toilet"/>
                <p>{props.distance}</p>
                <p>{props.stars}</p>
            </div>
        </Link>
    )
}
