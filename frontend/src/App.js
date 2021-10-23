import React, {useState} from 'react';

import './Sass/main.scss';

//Import React Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

//Import Routes
import Home from './Pages/Home.js'
import CreateRestroom from './Pages/CreateRestroom.js'
import Restroom from './Pages/Restroom.js'
import Settings from './Pages/Settings.js'
import Signin from './Pages/Signin.js'
import Signup from './Pages/Signup.js'
import {UserContext} from './UserContext';

function App() {

  const [user, setUser] = useState(null);

  return (
    <Router>
		<UserContext.Provider value={{user, setUser}}>
			<Switch>
				<Route exact path="/signin" component={Signin}></Route>
				<Route exact path="/signup" component={Signup}></Route>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/create-restroom" component={CreateRestroom}></Route>
				<Route exact path="/settings" component={Settings}></Route>
				<Route path="/:id" component={Restroom}></Route>
			</Switch>
		</UserContext.Provider>
    </Router>
  );
}

export default App;
