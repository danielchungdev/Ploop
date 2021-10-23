import React from 'react'
import Navbar from '../Components/Navbar'

import Input from '../Components/Input'
import RateStars from '../Components/RateStars'

import '../Sass/main.scss'

class CreateRestroom extends React.Component{
    render(){
        return(<div>
            <Navbar/>
            <div className = "create--container">
    

<form>
    <Input label="Location Name"/>
    <RateStars label = "Cleanliness"/>
    <RateStars label = "Ambiance"/>

    <div className = "label" style = {{marginTop:'4vh'}}>Baby Station</div>
                    <div class="radio-container">
                        <div><input type="radio" name="male" value="0"/> Yes</div>
                        <div><input type="radio" name="male" value="1"/> No</div>
                    </div>

                    <div className = "label" style = {{marginTop:'4vh'}}>Drying Method</div>
                    <div class="radio-container">
                        <div><input type="radio" name="male" value="0"/> Paper Towels</div>
                        <div><input type="radio" name="male" value="1"/> Blow Dryer</div>
                        <div><input type="radio" name="male" value="2"/> None</div>
                    </div>


                
                <input type="file" className = "create--upload--file">

                </input>


</form>
            </div>
        </div>)
    }
}
export default CreateRestroom