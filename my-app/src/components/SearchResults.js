import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { H1 } from './Topics';
import { H2 } from './Topic';
import styled from 'styled-components';
import { colors, devices } from "../styledComponents/variables";
import { Container } from './DraftAnArticle';

const SearchResults = (props) => {

    const [data,setData] = useState([])

    useEffect(() => {
        axios
            .get("https://how-to-lifehack.herokuapp.com/how-to")
            .then(response => 
                setData(response.data.filter(i => i.title.toLowerCase().includes(props.match.params.input.toLowerCase()))))
            .catch(error => {
                console.log(error)
            })

    },[])


    return (
        <Container>
           {data.map((article,i) => (
                <Link to={`/how-to/${article.id}`} key={i}>
                  <div className="article" key={article.id}>
                    <H1>{article.title}</H1>
                    <H2>{article.problem}</H2>
                  </div>
                </Link>
              ))}   
        </Container>
    );
}

export default SearchResults;
