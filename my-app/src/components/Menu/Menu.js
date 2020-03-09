import React, {useContext} from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import {UserContext} from '../../utilities/userContext'

export const Menu = ({open}) => {
    const user = useContext(UserContext);
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      {user.loggedIn ? (
        <a href="/logout">Logout</a>
      ) : (
        <a href="/login">Login</a>
      )}
      <a href="/signup">Signup</a>
      <a href="/DraftAnArticle">Create A How-To</a>
      <a href="/articlelist">All Articles</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

