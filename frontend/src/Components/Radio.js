import React from 'react'
import '../Sass/main.scss'

class Radio extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {label} = this.props;
       return(
            <div className = "radio-container">
                <input className = "radio" type = "radio" checked = "checked"/>
                
                <p className = "radio-label">
                    {label}
                </p>

            </div>
        )
    }
}
export default Radio