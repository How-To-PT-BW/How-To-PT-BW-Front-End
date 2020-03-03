import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';
import {H2, FormLabel, FormRadioLabel, H3} from '../styledComponents/fontStyles';
import DraftArticleLogo from '../images/DraftArticleLogo.png';

const Container = styled.div`
  background-color: ${colors.background2};
  fill: solid ${colors.background3};
  border: 1px solid red;

  @media ${devices.mobile} {
    max-width: 500px;
  }
  @media ${devices.tablet} {
    max-width: 800px;
  }
  @media ${devices.desktop} {
    max-width: 1024px;
  }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 20px;

` 

function Welcome() {

    return(
        <Container>
            <Header>
                <H2>Welcome!</H2>
                <H3>We can't wait to show you what you can do today.</H3>
            </Header>
        </Container>
    )

}

export default Welcome;