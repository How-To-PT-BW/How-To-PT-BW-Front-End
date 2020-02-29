import React, { Fragment } from 'react';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DraftForm from './components/DraftAnArticle';
import Topbarblock from './styledComponents/topbarblock';


function App() {
  return (
    <Fragment>
    {/* <Topbarblock/> */}
    <Router>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/draft" component={DraftForm} />
        </Switch>
      </div>
    </Router>
    </Fragment>

  );
}

export default App;
