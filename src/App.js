import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import FourZeroFour from './FourZeroFour';


// This site has 4 main pages: Home, About, Contact, 404
function App() {
  return (
    <BrowserRouter>
      {/* <BrowserRouter> needs to be wrapped around app component to have
          our app routing features.
       */}
      <div className='App'>
        <nav>
          <ul className='links'>
            <li>
              {/* <Link> enable route change on clicking respective <li>.
               If use clicks on 2nd <li>, he will be routed to /about route
               */}
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/some-random-non-matchable-route'>Non matchable route</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.
      */}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <FourZeroFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
