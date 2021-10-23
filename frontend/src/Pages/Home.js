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
                <p className="home--title">Nearby bathrooms</p>
                <div class="restrooms--near">
                    <RestroomCard distance="10m away" stars="*" id = "1"/>
                    <RestroomCard distance="10m away" stars="*****" id = "5"/>
                    <RestroomCard distance="10m away" stars="**" id = "2221"/>
                    <RestroomCard distance="10m away" stars="****" id = "331"/>
                    <RestroomCard distance="10m away" stars="***" id = "21"/>
                </div>
            </div>
        </div>)
    }
}
export default Home