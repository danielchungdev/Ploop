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
            <button  className = "button" style = {{backgroundColor:background}}>
                <Typography component = "legend" className = "text">{Text}</Typography>
            </button>
        )
    }
}
export default Button