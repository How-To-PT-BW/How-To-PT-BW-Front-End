import React, {useContext} from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import {UserContext} from '../../utilities/userContext'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
export const Menu = ({open}) => {
    const user = useContext(UserContext);
  return (
    <StyledMenu open={open}>
      <Link to="/">Home</Link>
      {user.loggedIn ? (
        <Link to="/logout">Logout</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <Link to="/signup">Signup</Link>
      <Link to="/DraftAnArticle">Create A How-To</Link>
      <Link to="/articlelist">All Articles</Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

