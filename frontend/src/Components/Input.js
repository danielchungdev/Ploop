import React from 'react'
import '../Sass/main.scss'
import { Typography } from '@mui/material';

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {label} = this.props;
       return(
            <div className = "input-container">
                <div>
                <Typography component="legend" >{label}</Typography>
                <input className = "input" type = "text" />
                </div>
            </div>
        )
    }
}
export default Input