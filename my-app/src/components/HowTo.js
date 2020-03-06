import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors, devices } from "../styledComponents/variables";
import { useForm } from "react-hook-form";

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

    const handleChange = e =>{
        setNewArticle({
            newArticle:{
                ...newArticle,
                [e.target.name]: e.target.value
            }
        });
    };


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
  console.log(data);
//   axiosWithAuth()
//     .post("/users/login", data)
//     .then(res => {
//       console.log(res);
//       localStorage.setItem("token", res.data.token);
//       props.history.push("/draft");
//     })
//     .catch(err => {
//       localStorage.removeItem("token");
//       console.log("There was an error", err);
//     });
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
    }, []);
    

    return (
      <div>
        <h1>{article.title}</h1>
        <h1>{article.problem}</h1>
        <button onClick={editArticle}>Edit</button>
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