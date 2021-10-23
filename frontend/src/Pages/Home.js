import React from 'react'
import RestroomCard from '../Components/RestroomCard'
import Button from '../Components/Button'

class Home extends React.Component{
    render(){
        return(<div>
            home
            <RestroomCard/>
            <Button>Log in</Button>
        </div>)
    }
}
export default Home