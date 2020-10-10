import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home.js'
import About from './components/About.js'
import Menu from './components/Menu.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path ='/'component={Home}/>
          <Route path ='/about'component={About}/>
          <Route path ='/menu'component={Menu}/>
         </Switch>
        
    </BrowserRouter>
    </Fragment>
  );
}

export default App;
