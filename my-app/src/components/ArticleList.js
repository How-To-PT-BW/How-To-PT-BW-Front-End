import React, { useState, useEffect } from "react";
import Loader from 'react-loader-spinner';
import axios from "axios";
import { Link } from "react-router-dom";

function Article() {
    const [articleList, setArticleList]=useState({});
    const [isLoading, setIsLoading]=useState(true);
    useEffect(function getArticles(){
        axios.get("https://how-to-lifehack.herokuapp.com/how-to")
        .then(res=>{
            console.log(res);
            setArticleList(res.data);
            setIsLoading(false);
        })
        .catch(err=>{
            console.log(err)
        });

    },[]);
    return (
      <div>
        <div className="article-list">
          {isLoading ? (
            <Loader
              type="Circles"
              color="#E02A48"
              height={100}
              width={200}
              timeout={3000} //3 secs
            />
          ) : (
            <>
              {articleList.map(article => (
                <Link to={`/how-to/${article.id}`}>
                  <div className="article" key={article.id}>
                    <h1>{article.title}</h1>
                    <h2>{article.problem}</h2>
                  </div>
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    );
}

export default Article;
