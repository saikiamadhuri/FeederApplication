import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grid from './component/Grid';
import CreateFeederApp from './component/CreateFeederApp';
import Redirect from './component/Redirect';

class App extends Component {
  state = {
    feederData: []
  };



  render() {
    
    return (
      
      <div className="main">
        
        <Router>
          <Routes>
            <Route path="/"
                    element={ <CreateFeederApp /> }/>
             <Route path="/redirect"
                    element={ <Redirect /> }/>            
          </Routes>
        </Router>
    </div>
    );
  }
}
export default App;
