import React, {useContext} from 'react';
import styled from 'styled-components';
import {UserContext} from '../utilities/userContext';
import {colors} from "./variables";
const Topbarbackground = styled.div`
    background: ${colors.background5};
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   

`
const Topbartext = styled.h3`
    
    margin: auto 0;
    

    font-family: Martel;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.01px;

    color: ${colors.background2};
`

const UserText = styled.h4`
  font-family: Martel;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;

  text-align: center;
  letter-spacing: 0.01px;

  color: ${colors.background2};
`;


function Topbarblock() {
    const user = useContext(UserContext);

    return (
      <Topbarbackground>
        <div></div>
        <Topbartext>How-To</Topbartext>
        {user.loggedIn ? (
          <UserText>Welcome {user.user}</UserText>
        ) : (
          <UserText>
            Please <a href="/login">Log In</a>
          </UserText>
        )}
      </Topbarbackground>
    );
}

export default Topbarblock;
