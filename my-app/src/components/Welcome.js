import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';
import {H2, H2White, FormLabel, FormRadioLabel, H3, H3White} from '../styledComponents/fontStyles';
import DraftArticleLogo from '../images/DraftArticleLogo.png';
import { Link } from "react-router-dom";

const Container = styled.div`
  background-color: ${colors.background2};
  fill: solid ${colors.background3};
margin: auto;
  @media ${devices.mobile} {
    max-width: 500px;
  }
  @media ${devices.tablet} {
    max-width: 800px;
  }
  @media ${devices.desktop} {
    max-width: 100%;
  }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    padding: 20px;

` 

const Form = styled.form`
display:flex;
flex-direction: column;
align-items:center;
`

const SearchContainer=styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.background5};
    align-items: center;
    justify-content: center;
`

const GetStartedButton = styled.button`
    background-color: ${colors.primary};
    border: none;
    border-radius: 38px;
    width: 343px;
    height: 49px;
    color: white;
    font-size: 22px;
    font-family: 'Martel';
    font-weight: 400;
    &:hover{
        cursor: pointer;
    }
`
const CreatorStudioContainer=styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.background2};
    background-image: url(${DraftArticleLogo});
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
`

const DraftArticleContainer=styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${colors.background6};
    background-image: url(${DraftArticleLogo});
    background-repeat: no-repeat;
    background-position: center;
    align-items: center;
    justify-content: center;
    height: 205px;
`

const SearchField = styled.input`
    background-color: ${colors.background2};
    border: none;
    width: 343px;
    height: 50px;
    font-size: 22px;
    border-radius: 38px;
    margin-bottom: 52px;
`

function Welcome() {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
    }; // your form submit function which will invoke after successful validation

    return (
      <Container>
        <Header>
          <H2>Welcome!</H2>
          <H3>We can't wait to show you what you can do today.</H3>
          <Link to="DraftAnArticle">
            <GetStartedButton>Let's Get Started ></GetStartedButton>
          </Link>
        </Header>
        <SearchContainer>
          <H3White>Find Out How To...</H3White>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <SearchField name="search" type="text"></SearchField>
          </Form>
        </SearchContainer>
        <CreatorStudioContainer>
          <H2>Creator Studio</H2>
          <H3>Do more with a How-To account!</H3>
          <H3>
            <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>{" "}
            Here
          </H3>
        </CreatorStudioContainer>
        <DraftArticleContainer>
          <H2White>Draft an Article</H2White>
          <H3White>Add to what makes How-To great!</H3White>
        </DraftArticleContainer>
      </Container>
    );

}

export default Welcome;