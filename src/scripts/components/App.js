import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './global/Header';
import Footer from './global/Footer';
import Home from './page/Home';
import Sample from './page/Sample';


const App = () => (
  <Router>
    <div className="container">
      <Header/>
      
      <div className="content">
          <Route exact path="/" component={Home}/>
          <Route exact path="/sample" component={Sample}/>
      </div>

      <Footer/>

    </div>
  </Router>
);

export default App;