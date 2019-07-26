import React from 'react'
import styled from "styled-components";

const CardWrapper = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
    background-color: whitesmoke;
    margin: 1vw;
    padding: .5vw;

`;

export default function CharacterCard (props) {
  return (
    <div>
      <CardWrapper>
        <div className = "main-img">  
          <img src={props.image} alt ={props.name}/>
        </div>  
        <h2> {props.name} </h2>
        <p> Status: {props.status}</p>
        <p> Species: {props.species}</p>
        <p> Type: {props.type === "" ? "None" : props.type}</p>
        <p> Origin: {props.origin.name} </p>
        <p> Location: {props["location"]["name"]}</p>
        <p> Gender: {props.gender} </p>
      </CardWrapper>
    </div>
  )
}
