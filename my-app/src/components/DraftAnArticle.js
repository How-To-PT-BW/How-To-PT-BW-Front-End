// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";
// import { H2 } from "../styledComponents/fontStyles";


// const Container = styled.div`
//   background-color: ${colors.background3};
//   fill: solid ${colors.background3};
//   border: 1px solid red;

//   @media ${devices.mobile} {
//     max-width: 500px;
//   }
//   @media ${devices.tablet} {
//     max-width: 800px;
//   }
//   @media ${devices.desktop} {
//     max-width: 1024px;
//   }
// `;



// function DraftForm() {
//   const { register, handleSubmit, watch, errors } = useForm();
//   const onSubmit = data => {
//     console.log(data);
//   }; // your form submit function which will invoke after successful validation

//   return (
//     <Container>
//       <DraftHeader>
//         <H2>Draft an Article</H2>
//       </DraftHeader>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>Example</label>
//         <input name="example" defaultValue="test" ref={register} />
//         <label>ExampleRequired</label>
//         <input
//           name="exampleRequired"
//           ref={register({ required: true, maxLength: 10 })}
//         />
//         {errors.exampleRequired && <p>This field is required</p>}
//         <input type="submit" />
//       </form>
//     </Container>
//   );
// }

// export default DraftForm;

import React from 'react';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../utilities/axiosWithAuth';
import styled from 'styled-components';
import { H2,H3,FormLabel } from "../styledComponents/fontStyles";
import DraftArticleLogo from "../images/DraftArticleLogo.png";
import { colors, devices } from "../styledComponents/variables";


export const DraftHeader = styled.div`
  background-image: url(${DraftArticleLogo});
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const Container = styled.div`
  background-color: ${colors.background3};
  fill: solid ${colors.background3};
  border: 1px solid red;
  display: flex;
  flex-direction:column;
  align-items: center;

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

export const SaveDraftButton = styled.button`
    background: #61BDB8;
    border-radius: 36.5px;
    font-size: 28px;
    font-family: "Martel";
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    color: ${colors.background1};
    
`
export const NextStepButton = styled.button`
    background: #F1F9F9;
    border-radius: 36.5px;
    font-size: 28px;
    font-family: "Martel";
    font-size: 28px;
    line-height: 32px;
    font-weight: 600;
    color: ${colors.text5};
`

export const Input = styled.input`
    border-radius: 16px;
    border: none;
    width: 343px;
    height: 50px;
    font-size: 22px;
    margin-bottom: 52px;
`



export const Select = styled.select`
    border-radius: 16px;
    border: none;
    width: 343px;
    height: 50px;
    font-size: 22px;
    margin-bottom: 52px;
`
export const Form = styled.form`
display:flex;
flex-direction: column;
align-items:center;
`
export const Buttons = styled.div`
    display: flex;
    margin-bottom: 3rem;

`



const DraftForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm()
    const id = Number(1)
    

    const submit = (data) => {
        data.user_id = 3
        console.log(data)
        setValue('title','')
        setValue('problem','')
        setValue('solution','')
        axiosWithAuth()
            .post("/how-to", data)
            .then(response => {
                console.log(response)
                props.sethowtoid(response.data.id)
                props.history.push(`/Step/${id}`)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
   
    return (
        <div>
            <Container>
                <DraftHeader><H2>draft an article</H2></DraftHeader>
                <Form onSubmit={handleSubmit(submit)}>
                 <label><H3>title</H3></label>
                    <Input type='text' placeholder='title' name='title' ref={register({required: true })}></Input>
                 {errors.title && <p>TITLE REQUIRED</p>}
                    <label><H3>problem</H3></label>
                    <Input type='text' placeholder='problem' name='problem' ref={register({required: true})}></Input>
                    {errors.problem && <p>PROBLEM REQUIRED</p>}
                    <label><H3>solution</H3></label>
                    <Input type='text' placeholder='solution' name='solution' ref={register({required: true})}></Input>
                    {errors.solution && <p>SOLUTION REQUIRED</p>}
                    <label htmlFor='topic'><H3>topic</H3></label>
                    <Select id='topic' name='topic' ref={register({required:true})}>
                       <option>food</option>
                       <option>hobbies and crafts</option>
                       <option>home and garden</option>
                        <option>travel</option>
                        <option>computers and tech</option>
                        <option>auto</option>

                   </Select>
                    {errors.topic && <p>TOPIC REQUIRED</p>}
                    <Buttons>
                        <SaveDraftButton type='submit'>save draft</SaveDraftButton>
                        <NextStepButton type='submit'>next step</NextStepButton>
                    </Buttons>
                    
                    
              </Form>
            </Container>
           
            
        </div>
    );
}

export default DraftForm;
