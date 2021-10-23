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




function App() {
  return (
    <Router>
      <Route/>

    </Router>
  );
}

export default App;
