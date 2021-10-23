import React from 'react'
import DefaultToilet from '../Assets/Defaults/toilet.png'
import '../Sass/main.scss'

export default function RestroomCard() {
    return (
        <div class="restroom--container">
            <div class="restroom--container">
                <img class="toilet--image" src={DefaultToilet} alt="Image of toilet"/>
                <p class="restroom--distance">5m away</p>
                <p>*****</p>
            </div>
        </div>
    )
}
