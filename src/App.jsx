import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { NavBar } from './layouts/components';
import TextFieldDemo from './pages/TextFieldsDemo/TextFieldDemo';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <TextFieldDemo />
          <NavBar />
        </Switch>
      </Router>
      
    </div>       
  );
}

export default App;
