import React from 'react'
import RestroomCard from '../Components/RestroomCard'
import Navbar from '../Components/Navbar'
import Button from '../Components/Button'
class Home extends React.Component{
    
    componentDidMount(){
        if ("geolocation" in navigator){
            console.log("available")
            navigator.geolocation.getCurrentPosition(
                function (position){
                    console.log("LONGITUDE: ", position.coords.longitude)
                    console.log("LATITUDE: ", position.coords.latitude)
                }
            )
        }
        else{
            console.log("unavailable")
        }
    }

    render(){
        return(<div>
            <Navbar/>
            <div class="home--container">
                <Button>Rate a Restroom</Button>
                <RestroomCard/>
            </div>
        </div>)
    }
}
export default Home