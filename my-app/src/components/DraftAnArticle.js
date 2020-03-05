// import React from "react";
// import ReactDOM from "react-dom";
// import styled from "styled-components";
// import { colors, devices } from "../styledComponents/variables";
// import { useForm } from "react-hook-form";
// import { H2 } from "../styledComponents/fontStyles";
// import DraftArticleLogo from "../images/DraftArticleLogo.png";

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

// const DraftHeader = styled.div`
//   background-image: url(${DraftArticleLogo});
//   background-repeat: no-repeat;
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 50px;
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
import axios from 'axios';


const DraftForm = (props) => {
    const { register, handleSubmit, setValue, errors } = useForm()
    const id = Number(1)

    const submit = (data) => {
        data.instructions = []
        console.log(data)
        setValue('title','')
        setValue('problem','')
        setValue('solution','')
        axios.post("/how-to", {data})
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    
   
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>title</label>
                <input type='text' placeholder='title' name='title' ref={register({required: "TITLE REQUIRED"})}></input>
                {errors.title && <p>{errors.title.message}</p>}
                <label>problem</label>
                <input type='text' placeholder='problem' name='problem' ref={register({required: "PROBLEM REQUIRED"})}></input>
                {errors.problem && <p>{errors.problem.message}</p>}
                <label>solution</label>
                <input type='text' placeholder='solution' name='solution' ref={register({required: "SOLUTION REQUIRED"})}></input>
                {errors.solution && <p>{errors.solution.message}</p>}
                <button onClick={() => props.history.push(`/Step/${id}`)}>next step</button>
                <button>save draft</button>
            </form>
            
        </div>
    );
}

export default DraftForm;
