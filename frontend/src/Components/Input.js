import React, { Fragment } from 'react'
import '../Sass/main.scss'

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {label} = this.props;
       return(
            <div class = "input-container">
                <div>
                <p class = "label">{label}</p>
                <input class = "input" type = "text" />
                </div>
            </div>
        )
    }
}
export default Input