import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";

export const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Home</a>
      <a href="/login">Login</a>
      <a href="/signup">Signup</a>
      <a href="/DraftAnArticle">Create A How-To</a>
      <a href="/articlelist">All Articles</a>
      <a href="/logout">Logout</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};

