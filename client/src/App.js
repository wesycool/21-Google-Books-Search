import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SavedPage from './components/SavedPage';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
        <Route exact path={["/","saved"]} component={SavedPage}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    </Router>

  );
}

export default App;
