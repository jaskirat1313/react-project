import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from "./About";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
const App=()=> {
  return (
    
      <>
      <Navbar/>
       <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Service" component={Service} />
       <Route exact path="/Contact" component={Contact} />
       <Redirect to="/"/>
       </Switch>
       <Footer/>
     
    </>
  );
}

export default App;
