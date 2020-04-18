
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/admin/admin';
import Login from './pages/login'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route path="/" component={ Admin } />
        </Switch>
      </Router>
    );
  }
}