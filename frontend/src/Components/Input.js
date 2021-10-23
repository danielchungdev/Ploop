import React from 'react'
import '../Sass/main.scss'

class Input extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
       return(
            <div class = "input-container">
                <p class = "input-label">Username</p>
                <input class = "input" type = "text"/>
            </div>
        )
    }
}
export default Input