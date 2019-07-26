import React from 'react'
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    width: 25vw;
    max-width: 30vw;
    margin: 1vw;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    background-color: whitesmoke;
    opacity: 0.5;
    padding: 1%;
`;



export default function CharacterCard (props) {
  return (
    <div>

      <CardWrapper>
        <h2> {props.name} </h2>
        <div className = "main-img">  
          <img src={props.image} alt ={props.name}/>
        </div>  
        <p> Status: {props.status}</p>
        <p> Species: {props.species}</p>
        <p> Type: {props.type}</p>
      </CardWrapper>
    
      <span>todo: location</span>
    
    </div>
  )
}
