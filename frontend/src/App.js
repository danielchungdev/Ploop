import './Sass/main.scss';

//Import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

//Import Routes
import Home from './Pages/Home.js'
import CreateRestroom from './Pages/CreateRestroom.js'
import Restroom from './Pages/Restroom.js'
import Settings from './Pages/Settings.js'
import Signin from './Pages/Signin.js'
import Signup from './Pages/Signup.js'

function App() {
  return (
    <Router>
      <Switch>
      {/** Landing Page*/}
        <Route path = "/signin" >
          <Signin/>
        </Route>

        {/** Signup Page*/}
        <Route path = "/signup">
          <Signup/>
        </Route>

        {/**Home Page*/}
        <Route path = "/" exact>
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
        <Route path = "/:id">
          <Restroom/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
