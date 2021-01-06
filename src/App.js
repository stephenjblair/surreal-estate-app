import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from  './components/Footer';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import './App.css';

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route  path="/" exact component={Hero} />
        <Route  path="/contact" exact component={Contact} />
        <Route  path="/sign-up" exact component={SignUp} />
      </Switch>
      <Footer />
    </div>
    </Router>
  )
}

export default App;