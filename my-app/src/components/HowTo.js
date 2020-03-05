import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

function HowTo(props) {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [editing, setEditing] = useState(false);
    const editArticle = article =>{
        setEditing(true);
    };
      const saveEdit = e => {

        console.log("submitted!");

        // e.preventDefault();
        // axiosWithAuth()
        //   .put(`/how-to/${props.match.params.id}`, data)
        //   .then(res => {
        //     console.log(res);
        //     colorChange(colors);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
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
    console.log(props);

    return (
      <div>
        <h1>{article.title}</h1>
        <h1>{article.problem}</h1>
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit article</legend>
            <label>
              title
              <input
                value={article.title}
              />
            </label>
            <label>
              problem
              <input
                value={article.problem}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
          </form>
        )}
      </div>
    );
}

export default HowTo;