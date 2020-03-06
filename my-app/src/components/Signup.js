import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';
import {H2, FormLabel, FormRadioLabel} from '../styledComponents/fontStyles';
import DraftArticleLogo from '../images/DraftArticleLogo.png';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

const Container = styled.div`
  background-color: ${colors.background3};
  fill: solid ${colors.background3};
  margin: auto;

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
    width: 100%;
`
const FormRowGroup = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin: 5px;
`
const FormRadioInput = styled.input`
    width: 75%;
    border-radius: 16px;
    border: 1px solid ${colors.background5};
    height: 40px;
    width: 40px;
    font-size: 22px;
    font-family: "Martel";
    font-weight: 600;
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
const FormBioInput = styled.input`
    width: 343px;
    height: 192px;
    border-radius: 16px;
    border: none;
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


function SignUpForm(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("/users/register", data)
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
        <H2>Sign Up</H2>
      </Header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInputGroup>
          <FormLabel>Username</FormLabel>
          <FormInput
            name="username"
            ref={register}
            placeholder="placeholderrrr"
          />
        </FormInputGroup>
        <FormInputGroup>
          <FormLabel>Password</FormLabel>
          <FormInput
            name="password"
            type="password"
            ref={register({
              required: true,
              maxLength: 10,
            })}
          />
          {errors.password && <span>This field is required</span>}
        </FormInputGroup>
        <FormLabel>Account Type</FormLabel>

        <FormRowGroup>
          <FormRadioInput
            name="allowPost"
            type="radio"
            id="lurker"
            value="false"
            ref={register}
          />
          <FormLabel for="lurker">Lurker</FormLabel>
        </FormRowGroup>
        <FormRowGroup>
          <FormRadioInput
            name="allowPost"
            type="radio"
            id="contributor"
            value="true"
            ref={register}
          />
          <FormLabel for="contributor">Contributor</FormLabel>
        </FormRowGroup>
        <FormInputGroup>
          <FormLabel>Email Address</FormLabel>
          <FormInput name="email" type="email" ref={register} />
        </FormInputGroup>
        {/*<FormInputGroup>
          <FormRowGroup>
            <FormLabel>Auto</FormLabel>
            <FormInput type="checkbox" name="auto" ref={register} />
          </FormRowGroup>
          <FormRowGroup>
            <FormLabel>Computers</FormLabel>
            <FormInput type="checkbox" name="computers" ref={register} />
          </FormRowGroup>
          <FormRowGroup>
            <FormLabel>Food</FormLabel>
            <FormInput type="checkbox" name="food" ref={register} />
          </FormRowGroup>
          <FormRowGroup>
            <FormLabel>Hobbies</FormLabel>
            <FormInput type="checkbox" name="hobbies" ref={register} />
          </FormRowGroup>
          <FormRowGroup>
            <FormLabel>Home and Garden</FormLabel>
            <FormInput type="checkbox" name="homeandgarden" ref={register} />
          </FormRowGroup>
          <FormRowGroup>
            <FormLabel>Travel</FormLabel>
            <FormInput type="checkbox" name="travel" ref={register} />
          </FormRowGroup>
        </FormInputGroup> */}
        <FormInputGroup>
          <FormLabel>Profile Bio</FormLabel>
          <FormBioInput
            type="text"
            name="bio"
            placeholder="Write something about you"
            ref={register}
          />
        </FormInputGroup>

        {errors.exampleRequired && <p>This field is required</p>}
        <FormSubmit type="submit" value="Submit" />
      </Form>
    </Container>
  );
};

export default SignUpForm;