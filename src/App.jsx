import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { NavBar } from './layouts/components';
// import TextFieldDemo from './pages/TextFieldsDemo/TextFieldDemo';
import AuthRoute from './routes/AuthRoute';
import Trainee from './pages/Trainee';
import Nomatch from './pages/Nomatch/Nomatch';
import { TextFieldDemo } from './pages';

function App() {
  return (
    <div >
      <Router>
        <Switch>
        <AuthRoute
            component={Trainee}
            exact
            path="/trainee" />
             <AuthRoute
            component={TextFieldDemo}     
            exact
            path="/textfield" />
        <AuthRoute
            component={Nomatch}  />
         
        </Switch>
      </Router>
    </div>       
  );
}

export default App;
