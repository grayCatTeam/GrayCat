import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import classes from './App.module.css'
import React from "react";
import gsap from "gsap";


  gsap.set('.follower',{xPercent:-50,yPercent:-50});



function App() {
  return (
    <div className="App">
      <div className={classes.cursor}></div>
      <div className={classes.follower}></div>
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
