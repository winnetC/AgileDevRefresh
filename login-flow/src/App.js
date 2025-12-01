import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard">
          <h2>Welcome to the Dashboard!</h2>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;