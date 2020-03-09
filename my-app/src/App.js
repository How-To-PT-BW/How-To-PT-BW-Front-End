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
import Topics from './components/Topics';
import Topic from './components/Topic';
import SearchResults from './components/SearchResults';
import FooterBarBlock from './styledComponents/FooterBarblock';

import styled from "styled-components";
import { Burger, Menu } from "./components";

//styling

// staging test

function App() {
  const [howtoid,sethowtoid] = useState()
  const [user, setUser] = useState("Please Log In!");
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("This is user:",user)
  return (
    <UserContext.Provider
      value={{
        user,
        loggedIn,
        updateUser: newUser => {
          setUser(newUser);
        },
        updateLoggedIn: newLogin => {
          setLoggedIn(newLogin);
        }
      }}
    >
      <Router>
        <TopBarBlock />
        <div>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/" render={props => <Welcome {...props} />} />
            <Route exact path="/Topics" component={Topics} />
            <Route
              exact
              path="/Topics/:topic"
              render={props => <Topic {...props} />}
            />
            <ProtectedRoute exact path="/articlelist" component={ArticleList} />
            <Route exact path="/signup" component={SignUpForm} />
            <Route
              exact
              path="/search/:input"
              render={props => <SearchResults {...props} />}
            />
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
        <FooterBarBlock />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
