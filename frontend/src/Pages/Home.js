import React, {useEffect, useContext} from 'react'
import RestroomCard from '../Components/RestroomCard'
import Navbar from '../Components/Navbar'
import { Typography } from '@material-ui/core'
import { UserContext } from '../UserContext';
import {useHistory} from 'react-router-dom'

export default function Home() {

    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{

        const user = localStorage.getItem("user");
		if (user){
			setUser(user);
		}
		else {
			history.push("/signin");
		}

        if ("geolocation" in navigator){
            console.log("available")
            navigator.geolocation.getCurrentPosition(
                function (position){
                    console.log("LONGITUDE: ", position.coords.longitude)
                    console.log("LATITUDE: ", position.coords.latitude)
                }
            )
        }
    }, [])

    const handleClick = () => {
        //Sending to the API a POST with the coordinates.
        //if api returns exists
        //then give the option to rate
        //else create restroom
        history.push("/create-restroom")
    }

    const history = useHistory()

    return (
        <div>
            <Navbar/>
            <div class="home--container">
                <button className = "button" onClick={handleClick}>Rate Bathroom</button>
                <Typography component="legend"  className="home--title">Nearby bathrooms</Typography>
                <div class="restrooms--near">
                    <RestroomCard distance="10m away" stars="*" id = "1"/>
                    <RestroomCard distance="10m away" stars="*****" id = "5"/>
                    <RestroomCard distance="10m away" stars="**" id = "2221"/>
                    <RestroomCard distance="10m away" stars="****" id = "331"/>
                    <RestroomCard distance="10m away" stars="***" id = "21"/>
                </div>
            </div>
        </div>
    )
}