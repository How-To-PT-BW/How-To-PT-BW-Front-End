import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        <div>
           {data.map((article,i) => (
                <Link to={`/how-to/${article.id}`} key={i}>
                  <div className="article" key={article.id}>
                    <h1>{article.title}</h1>
                    <h2>{article.problem}</h2>
                  </div>
                </Link>
              ))}   
        </div>
    );
}

export default SearchResults;
