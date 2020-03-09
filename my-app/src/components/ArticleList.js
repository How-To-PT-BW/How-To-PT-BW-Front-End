import React, { useState, useEffect } from "react";
import Loader from 'react-loader-spinner';
import axios from "axios";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {colors, devices} from '../styledComponents/variables';


const Container = styled.div`
  background-color: ${colors.background2};
  display: flex;
  flex-direction: column;
  align-items:center;

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

const ArticleCard = styled.div`
  background-color: ${colors.background3};
  color: ${colors.text5};
  width: 100%;
  margin: 20px auto;
  padding: 10px 20px;
  text-align: center; 
  border-radius: 5px;
  font-family: 'Martel';
`;

const ArticleTitle = styled.h1`
margin-bottom: 0px;
margin-top: 0px;
`

const ArticleProblem = styled.h2`
  margin: 0px;
  margin-bottom: 10px;
  color: ${colors.text5};
  font-weight: 400;
`;

const ArticleTopic=styled.div`

  background-color: ${colors.background5};
  color: ${colors.text2};
  width: fit-content;
  padding: 5px 15px;
  border-radius: 20px;
  margin: auto;
  text-transform: capitalize;
`


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
      <Container>
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
                  <ArticleCard key={article.id}>
                    <ArticleTitle>{article.title}</ArticleTitle>
                    <ArticleProblem>{article.problem}</ArticleProblem>
                    <ArticleTopic>{article.topic}</ArticleTopic>
                  </ArticleCard>
                </Link>
              ))}
            </>
          )}
        </div>
      </Container>
    );
}

export default Article;
