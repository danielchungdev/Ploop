import React from 'react';
import '../Sass/main.scss'
import EmptyStar from '@mui/icons-material/StarBorder'
import FilledStar from '@mui/icons-material/Star'

export default function RateStars(props){
    return(
    <div className = "rate--stars--container">
        <p className = "label">{props.label}</p>

        <div className="rate--stars--rate">
            <input type = "radio" name = "star" id = "1"/><label for="1"><FilledStar/></label>
            <input type = "radio" name = "star" id = "2"/><label for="2"><FilledStar/></label>
            <input type = "radio" name = "star" id = "3"/><label for="3"><FilledStar/></label>
            <input type = "radio" name = "star" id = "4"/><label for="4"><FilledStar/></label>
            <input type = "radio" name = "star" id = "5"/><label for="5"><FilledStar/></label>
        </div>
    </div>)

}