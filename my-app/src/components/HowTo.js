import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";

function HowTo(props) {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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

    return(
        <div>
            <h1>{article.title}</h1>
        </div>
    )
}

export default HowTo;