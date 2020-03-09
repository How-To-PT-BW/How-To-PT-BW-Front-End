import React from 'react';
import { Link } from 'react-router-dom';
import food from '../images/food.bmp';
import hobbies from '../images/hobbies.bmp';
import homeandgarden from '../images/homeandgarden.bmp';
import travel from '../images/travel.bmp';
import computers from '../images/computers.bmp';
import auto from '../images/auto.bmp';
import styled from 'styled-components';
import { colors, devices } from "../styledComponents/variables";

const Container = styled.div`
 background-color: ${colors.background3};
  fill: solid ${colors.background3};
  
  display: flex;
  flex-direction:row;
  align-items: center;
  flex-wrap:wrap;
  justify-content:space-around;
  
  
  

  @media ${devices.mobile} {
    max-width: 500px;
  }
  @media ${devices.tablet} {
    max-width: 800px;
  }
  @media ${devices.desktop} {
    max-width: 1024px;
  }
`

export const Topic = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Img = styled.img`
    width: 250px;
    height: 250px;
    
`
export const H3 = styled.h3`
    font-family: "Martel";
    font-size: 22px;
    font-weight: 400;
    color: ${colors.text5};
`;

export const H1 = styled.h1`
    font-family: "Martel";
    font-size: 35px;
    font-weight: 400;
    color: ${colors.text5};
`;

const Topics = () => {
    return (
        <div>
            {/* <h2>topics</h2> */}
            <Container>
                <H1>topics</H1>
                <Container>
                    <Link to='/topics/food'><Topic><H3>food</H3><Img src={food}/></Topic></Link>
                    <Link to='/topics/hobbies and crafts'><Topic><H3>hobbies and crafts</H3><Img src={hobbies}/></Topic></Link>
                    <Link to='/topics/home and garden'><Topic><H3>home and garden</H3><Img src={homeandgarden}/></Topic></Link>
                    <Link to='/topics/travel'><Topic><H3>travel</H3><Img src={travel}/></Topic></Link>
                    <Link to='/topics/computers and tech'><Topic><H3>computers and tech</H3><Img src={computers}/></Topic></Link>
                    <Link to='/topics/auto'><Topic><H3>auto</H3><Img src={auto}/></Topic></Link>
                </Container> 
            </Container>
        </div>
        
    );
}

export default Topics;
