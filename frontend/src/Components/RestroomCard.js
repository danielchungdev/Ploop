import React from 'react'
import DefaultToilet from '../Assets/Defaults/toilet.png'
import '../Sass/main.scss'

export default function RestroomCard() {
    return (
        <div className="restroom--container">
            <img className="toilet--image" src={DefaultToilet} alt="Image of toilet"/>
            <p>5m away</p>
            <p>*****</p>
        </div>
    )
}
