import React, { useContext, useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/hooks";
import styled from 'styled-components';
import {UserContext} from '../utilities/userContext';
import {colors} from "./variables";
import { Burger, Menu } from "../components/";


const Topbarbackground = styled.div`
    background: ${colors.background5};
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;

`
const Topbartext = styled.h3`
    font-family: Martel;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    letter-spacing: 0.01px;

    color: ${colors.background2};
`

const UserText = styled.h4`
  font-family: Martel;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  letter-spacing: 0.01px;

  color: ${colors.background2};
`;

const LoginButton = styled.a`
  background: ${colors.primary};
  color: white;
  margin-left: 10px;
  padding: 5px 15px;
  border-radius: 25px;
  font-family: Martel;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;

  text-align: center;
  letter-spacing: 0.01px;
`;


function Topbarblock() {
    const user = useContext(UserContext);
    const node = useRef();
    const [open, setOpen] = useState(false);
    useOnClickOutside(node, () => setOpen(false));
    return (

      <Topbarbackground>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <Topbartext>How-To</Topbartext>
        {user.loggedIn ? (
          <UserText>Welcome {user.user}</UserText>
        ) : (
          <LoginButton href="/login">Log In</LoginButton>
        )}
      </Topbarbackground>
    );
}

export default Topbarblock;
