import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utilities/axiosWithAuth';


const Container = styled.div`
  background-color: ${colors.background2};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.text5};

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

const FormEdit = styled.button`
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

const FormDelete = styled.button`
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

const FormCancel = styled.button`
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

const ButtonRow = styled.div`
    display: flex; 
    justify-content: space-evenly;
    width: 80%;
    margin: 10px auto;
`

const Instructions = styled.div`
display: flex;
flex-direction: column;
text-align:center;
align-items: center;
width: 80%;
border-bottom: 1px dashed ${colors.background4};
`
const ArticleTitle = styled.h1`
  margin-bottom: 0px;
  margin-top: 0px;
`;

const ArticleProblem = styled.h2`
  margin: 0px;
  margin-bottom: 10px;
  color: ${colors.text5};
  font-weight: 400;
`;

const ArticleSolution = styled.h2`
  margin: 10px 0px;
  color: ${colors.text5};
  font-weight: 400;
`;

const InstructionTitle = styled.h2`
  margin: 0px;
  margin-top: 10px;
  color: ${colors.text5};
  font-weight: 400;
`;

const InstructionDetail = styled.p`
  margin-bottom:15px;

  color: ${colors.text5};
  font-weight: 400;
`;

const FormInput = styled.input`
  width: 75%;
  border: 2px solid ${colors.background4};
  background-color: ${colors.background1};
  text-align: center;
  border-radius: 16px;
  height: 48px;
  font-size: 22px;
  font-family: "Martel";
  font-weight: 600;
`;

const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  font-family: "Martel";
  font-size: 28px;
  line-height: 32px;
  font-weight: 600;
  color: ${colors.text5};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const FormContainer = styled.form`

width: 100%;

`




function HowTo(props) {
    const [article, setArticle] = useState({});
    const [articleInstructions, setArticleInstructions] = useState([]);
    const [newArticle, setNewArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const editArticle = article =>{
        setEditing(true);
    };
    const [didEdit, setDidEdit] = useState(false);


    const { register, handleSubmit, watch, errors } = useForm();

    const deleteArticle = () =>{
        axiosWithAuth()
        .delete(`/how-to/${article.id}`)
        .then(res=>{
            console.log(res);
            props.history.push("/articlelist");
        })
        .catch(err=>{
            console.log("Error!", err);
        })
    };
    const onSubmit = data => {
        console.log(data);
        console.log(article.id);
        axiosWithAuth()
            .put(`/how-to/${article.id}`, data)
            .then(res => {
            console.log(res);
            setEditing(false);
            setDidEdit(!didEdit);
            props.history.push(`/how-to/${article.id}`);
            })
            .catch(err => {
            console.log("There was an error", err);
            });
};
//comment
    useEffect(function getArticle() {
      axios
        .get(`https://how-to-lifehack.herokuapp.com/how-to/${props.match.params.id}`)
        .then(res => {
          console.log(res);
          setArticle(res.data);
          setArticleInstructions(res.data.instructions);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }, [didEdit]);
    console.log("This is article:",articleInstructions)

    return (
      <Container>
        <ArticleTitle>{article.title}</ArticleTitle>
        <ArticleProblem>{article.problem}</ArticleProblem>
        <ArticleSolution>{article.solution}</ArticleSolution>
        {articleInstructions.map(instruction => {
          return (
            <Instructions>
              <InstructionTitle>{instruction.step_title}</InstructionTitle>
              <InstructionDetail>{instruction.description}</InstructionDetail>
            </Instructions>
          );
        })}
        <ButtonRow>
          <FormEdit onClick={editArticle}>Edit</FormEdit>
          <FormDelete onClick={deleteArticle}>Delete</FormDelete>
        </ButtonRow>
        {editing && (
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <FormInputGroup>
              <FormLabel>
                Title
                <FormInput
                  defaultValue={article.title}
                  name="title"
                  type="text"
                  ref={register}
                />
              </FormLabel>
            </FormInputGroup>
            <FormInputGroup>
              <FormLabel>
                Problem
                <FormInput
                  defaultValue={article.problem}
                  name="problem"
                  type="text"
                  ref={register}
                />
              </FormLabel>
            </FormInputGroup>
            <FormInputGroup>
              <FormLabel>
                Solution
                <FormInput
                  defaultValue={article.solution}
                  name="solution"
                  type="text"
                  ref={register}
                />
              </FormLabel>
            </FormInputGroup>
            <FormInputGroup>
              <FormLabel>
                Topic
                <FormInput
                  defaultValue={article.topic}
                  name="topic"
                  type="text"
                  ref={register}
                />
              </FormLabel>
            </FormInputGroup>
            <ButtonRow>
              <FormSubmit type="submit" value="Submit" />
              <FormCancel onClick={() => setEditing(false)}>Cancel</FormCancel>
            </ButtonRow>
          </FormContainer>
        )}
      </Container>
    );
}

export default HowTo;