import React from 'react'
import '../Sass/main.scss'

import { Typography } from '@material-ui/core';

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let Text = this.props.children;
        let background = this.props.background;

        return(
            <Typography component="legend"  className = "button" style = {{backgroundColor:background}}>
                <p className = "text">{Text}</p>
            </Typography>
        )
    }
}
export default Button