import React, { useState, Fragment }from 'react';
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DraftForm from './components/DraftAnArticle';
import TopBarBlock from './styledComponents/topbarblock';
import Step from './components/Step';
import Welcome from './components/Welcome';



// staging

function App() {
  const [steps,setSteps] = useState([])
  const [howtoid,sethowtoid] = useState()
  return (
    
    
    <Router>
      <TopBarBlock/>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/DraftAnArticle">Create</Link>
      </nav>
      <div>
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={SignUpForm} />
          <ProtectedRoute exact path="/draft" component={DraftForm} />
          <Route path="/DraftAnArticle" render={props => <DraftForm {...props} sethowtoid={sethowtoid}/>}/>
          <Route exact path="/Step/:id" render={props => <Step {...props} steps={steps} setSteps={setSteps} howtoid={howtoid}/>}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
