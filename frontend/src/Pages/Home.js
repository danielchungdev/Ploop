import React from 'react'
import RestroomCard from '../Components/RestroomCard'

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
            home
            <RestroomCard/>
        </div>)
    }
}
export default Home