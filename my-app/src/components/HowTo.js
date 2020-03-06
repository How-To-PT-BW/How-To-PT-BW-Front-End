import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import { useForm } from "react-hook-form";
import {axiosWithAuth} from '../utilities/axiosWithAuth';

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


function HowTo(props) {
    const [article, setArticle] = useState({});
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

    useEffect(function getArticle() {
      axios
        .get(`https://how-to-lifehack.herokuapp.com/how-to/${props.match.params.id}`)
        .then(res => {
          console.log(res);
          setArticle(res.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
    }, [didEdit]);
    

    return (
      <div>
        <h1>{article.title}</h1>
        <h1>{article.problem}</h1>
        <button onClick={editArticle}>Edit</button>
        <button onClick={deleteArticle}>Delete</button>
        {editing && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <legend>edit article</legend>
            <label>
              title
              <input
                defaultValue={article.title}
                name="title"
                type="text"
                ref={register}
              />
            </label>
            <label>
              problem
              <input
                defaultValue={article.problem}
                name="problem"
                type="text"
                ref={register}
              />
            </label>
            <label>
              solution
              <input
                defaultValue={article.solution}
                name="solution"
                type="text"
                ref={register}
              />
            </label>
            <label>
              topic
              <input
                defaultValue={article.topic}
                name="topic"
                type="text"
                ref={register}
              />
            </label>
            <div className="button-row">
              <FormSubmit type="submit" value="Submit" />
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    );
}

export default HowTo;