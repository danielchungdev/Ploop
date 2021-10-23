import React from 'react'
import '../Sass/main.scss'

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let Text = this.props.children;
        return(
            <div className = "button">
                <p className = "text">{Text}</p>
            </div>
        )
    }
}
export default Button