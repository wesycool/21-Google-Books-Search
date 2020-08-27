import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedPage from './components/SavedPage';
import SearchPage from './components/SearchPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className='container'>
          <Route exact path={"/"} component={SavedPage}/>
          <Route exact path="/search" component={SearchPage}/>
        </div>

      </div>
    </Router>

  );
}

export default App;
