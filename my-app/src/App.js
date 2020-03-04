import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DraftForm from './components/DraftAnArticle';
import Welcome from './components/Welcome';



function App() {
  return (
    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/draft" component={DraftForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
