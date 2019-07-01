import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from './components/Login'
import Signin from './components/Signin'

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </Router>
    );
  }
}

export default App;