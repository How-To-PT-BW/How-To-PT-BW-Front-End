import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import {useForm} from 'react-hook-form';

const Container = styled.div`
background-color: ${colors.background3};
`

function SignUpForm() {

const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Example</label>
      <input name="example" defaultValue="test" ref={register} />
      <label>ExampleRequired</label>
      <input
        name="exampleRequired"
        ref={register({ required: true, maxLength: 10 })}
      />
      {errors.exampleRequired && <p>This field is required</p>}
      <input type="submit" />
    </form>

  );
};

export default SignUpForm;