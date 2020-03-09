import React, { useState, Fragment, useRef }from 'react';
import { useOnClickOutside } from "./hooks/hooks"
import './App.css';
import LoginForm from './components/Login';
import SignUpForm from './components/Signup';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';
import DraftForm from './components/DraftAnArticle';
import TopBarBlock from './styledComponents/topbarblock';
import Step from './components/Step';
import Welcome from './components/Welcome';
import ArticleList from './components/ArticleList';
import HowTo from './components/HowTo';
import {UserContext} from './utilities/userContext';
import Logout from './components/Logout';
import { Burger, Menu } from "./components";

//styling


// staging test

function App() {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [howtoid,sethowtoid] = useState()
  const [user, setUser] = useState("Please Log In!");
  const [open, setOpen] = useState(false);
  console.log("This is user:",user)
  return (
    <UserContext.Provider
      value={{
        user,
        updateUser: newUser => {
          setUser(newUser);
        }
      }}
    >
      <Router>
        <TopBarBlock />
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/DraftAnArticle">Create</Link>
          <Link to="/articlelist">Articles</Link>
          <Link to="/logout">Logout</Link>
        </nav>
        <div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" component={Welcome} />

            <Route exact path="/articlelist" component={ArticleList} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route
              path="/how-to/:id"
              render={props => {
                return <HowTo {...props} />;
              }}
            />

            <Route
              path="/DraftAnArticle"
              render={props => <DraftForm {...props} sethowtoid={sethowtoid} />}
            />
            <Route
              exact
              path="/Step/:id"
              render={props => <Step {...props} howtoid={howtoid} />}
            />
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
