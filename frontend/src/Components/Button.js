import React from 'react'
import '../Sass/main.scss'

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let Text = this.props.children;
        let background = this.props.background;

        return(
            <div className = "button" style = {{backgroundColor:background}}>
                <p className = "text">{Text}</p>
            </div>
        )
    }
}
export default Button