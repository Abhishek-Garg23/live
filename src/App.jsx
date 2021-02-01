import React from 'react';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Navbar from './Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
/* Import Bootstrap CSS */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* Import Bootstrap JS */
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

const App = () => {
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;