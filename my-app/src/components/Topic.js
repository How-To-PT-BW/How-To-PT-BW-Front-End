import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { H1 } from './Topics';
import styled from 'styled-components';
import { colors, devices } from "../styledComponents/variables";
import { Container } from './DraftAnArticle';

const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`


export const H2 = styled.h2`
    font-family: "Martel";
    font-size: 22px;
    font-weight: 400;
    color: ${colors.text5};
`;

const Topic = (props) => {
    const [data,setData] = useState([])

    useEffect(() => {
        axios
            .get("https://how-to-lifehack.herokuapp.com/how-to")
            .then(response => {
            setData(response.data.filter(i => i.topic === props.match.params.topic))
            console.log(data)
            })
            .catch(error => {
                console.log(error)
         })

        },[]);
    // const filteredData = data.filter(i => i.topic === props.match.params.topic)

    return (
        <Container>
            <H1>{props.match.params.topic}</H1>
            {data.map((article,i) => (
                <Link to={`/how-to/${article.id}`} key={i}>
                  <Div className="article" key={article.id}>
                    <H1>{article.title}</H1>
                    <H2>{article.problem}</H2>
                  </Div>
                </Link>
              ))}  
        </Container>
    );
}

export default Topic;
