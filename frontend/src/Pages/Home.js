import React from 'react'
import RestroomCard from '../components/RestroomCard'
import Button from '../components/Button'

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