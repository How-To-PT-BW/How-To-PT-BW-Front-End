import React, {useState,useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
const FooterBarBackground = styled.div`
    background: #36827E;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   

`
const FooterBarText = styled.h3`
    
    margin: auto 0;
    

    font-family: Martel;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;

    text-align: center;
    letter-spacing: 0.01px;

    color: #F1F9F9;
`

const FooterBarblock = () => {
    const [data,setData] = useState({})

    useEffect(() => {
        axios.get("https://how-to-lifehack.herokuapp.com/how-to")
            .then(response => {
                setData(response.data[Math.floor(Math.random() * response.data.length)])
            })
            .catch(error => {
                console.log(error)
            })
    },[])
    return (
        <FooterBarBackground>
            <Link to={`/how-to/${data.id}`}>
                <FooterBarText>
                    <h5>featured article : {data.title}</h5>      
                </FooterBarText>
            </Link>
        </FooterBarBackground>
        
    );
}

export default FooterBarblock;
