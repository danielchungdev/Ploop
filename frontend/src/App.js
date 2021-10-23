import logo from './logo.svg';
import './Sass/main.scss';

//Import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

//Import Routes
import Home from './components/Home.js'
import CreateRestroom from './components/CreateRestroom.js'
import Restroom from './components/Restroom.js'
import Settings from './components/Settings.js'
import Signin from './components/Signin.js'
import Signup from './components/Signup.js'





function App() {
  return (
    <Router>
      {/** Landing Page*/}
      <Route path = "/signin" exact>
        <Signin/>
      </Route>

      {/** Signup Page*/}
      <Route path = "/signup">
        <Signup/>
      </Route>

      {/**Home Page*/}
      <Route path = "/">
        <Home/>
      </Route>


      {/** Create Restroom Page*/}
      <Route path = "/create-restroom">
        <CreateRestroom/>
      </Route>


      {/** Settings Page*/}
      <Route path = "/settings">
        <Settings/>
      </Route>


      {/** Restroom Page*/}
      <Route path = "/restroom">
        <Restroom/>
      </Route>

    </Router>
  );
}

export default App;
