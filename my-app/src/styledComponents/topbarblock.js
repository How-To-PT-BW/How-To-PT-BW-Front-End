import React, {useContext} from 'react';
import styled from 'styled-components';
import {UserContext} from '../utilities/userContext';
const Topbarbackground = styled.div`
    background: #36827E;
    height: 100px;
    display: flex;
    justify-content: center;
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

    color: #F1F9F9;
`


function Topbarblock() {
    const user = useContext(UserContext);

    return (
        <Topbarbackground>
            <Topbartext>How-To</Topbartext>
            <h3>Welcome {user.user}</h3>
        </Topbarbackground>
    );
}

export default Topbarblock;
