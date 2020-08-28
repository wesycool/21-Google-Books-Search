import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedPage from './components/SavedPage';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container-fluid' style={{marginTop:'15px'}}>
          <Jumbotron />
          <div className='container'>
            <Route exact path={"/"} component={SearchPage}/>
            <Route exact path="/saved" component={SavedPage}/>
          </div>
        </div>

      </div>
    </Router>

  )
}

export default App;
