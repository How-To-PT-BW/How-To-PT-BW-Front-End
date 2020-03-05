import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';
import {H2, FormLabel} from '../styledComponents/fontStyles';
import DraftArticleLogo from '../images/DraftArticleLogo.png';
import axios from 'axios';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

const Container = styled.div`
  background-color: ${colors.background3};
  fill: solid ${colors.background3};

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
    justify-content: center;
    align-items:center;
    padding: 20px;

` 
const FormInputGroup = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    margin-bottom: 20px;
`

const FormInput = styled.input`
    width: 75%;
    border-radius: 16px;
    border: none;
    height: 48px;
    font-size: 22px;
    font-family: "Martel";
    font-weight: 600;
`

const FormSubmit = styled.input`
  background-color: ${colors.primary};
  padding: 0px 25px;
  border: none;
  border-radius: 36.5px;
  font-size: 28px;
  font-family: "Martel";
  font-weight: 700;
  color: white;
  width: 163px;
  height: 48px;
`;

const Form = styled.form`
display:flex;
flex-direction: column;
align-items:center;
`





function LoginForm(props) {

  const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
      console.log(data);
      axiosWithAuth()
        .post("/users/login", data)
        .then(res => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          props.history.push("/draft");
        })
        .catch(err => {
          localStorage.removeItem("token");
          console.log("There was an error", err);
  
        });
    }; // your form submit function which will invoke after successful validation
  
  
    return (
      <Container>
        <Header>
          <H2>Login</H2>
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInputGroup>
            <FormLabel>Username</FormLabel>
            <FormInput name="username" ref={register} placeholder="placeholderrrr"/>
          </FormInputGroup>
          <FormInputGroup>
            <FormLabel>Password</FormLabel>
            <FormInput
              name="password"
              type="password"
              ref={register({ required: true, minLength: 4 })}
            />
          </FormInputGroup>
          {errors.exampleRequired && <p>This field is required</p>}
          <FormSubmit type="submit" value="Submit"/>
        </Form>
      </Container>
    );
  };
  
  export default LoginForm;