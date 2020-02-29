import React from 'react';
import styled from 'styled-components';

const Topbarbackground = styled.div`
    background: #36827E;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

`
const Topbartext = styled.h3`
    position: absolute;
    left: 34.4%;
    right: 34.13%;
    top: 28.57%;
    bottom: 30.36%;

    font-family: Martel;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.01px;

    color: #F1F9F9;
`

const Topbarblock = () => {
    return (
        <Topbarbackground>
            <Topbartext>How-To</Topbartext>
        </Topbarbackground>
    );
}

export default Topbarblock;
