import React from 'react'
import '../Sass/main.scss'

class Button extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let Text = this.props.children;
        return(
            <div class = "button">
                {Text}
            </div>
        )
    }
}
export default Button