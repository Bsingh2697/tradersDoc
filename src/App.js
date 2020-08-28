import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Submissions from './components/Submissions';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from './components/Nav';
import Login from './components/Login';
import About from './components/About';
import Contactus from './components/contactus';


function App() {
  useEffect(()=>{

  },[])
  return (
    <Router>
        <Nav/>
      <Switch>
        <Route path = "/" exact component={Login}/>
        {/* <Route path = "/upload" exact component={Submissions}/> */}
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contactus}/>
      </Switch>
    </Router>

  );
}

export default App;
