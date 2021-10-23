import React from 'react'
import '../Sass/main.scss'

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {label} = this.props;
       return(
            <div className = "input-container">
                <div>
                <p className = "label">{label}</p>
                <input className = "input" type = "text" />
                </div>
            </div>
        )
    }
}
export default Input