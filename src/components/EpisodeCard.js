import React from 'react'
import styled from "styled-components";

const EpiCardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 1vw;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-around; 
  background-color: whitesmoke;
  padding: 1%;
`;

export default function EpisodeCard (props) {
  return (
    <div className = "grid-view">
      <EpiCardWrapper>
        <h2> {props.name} </h2>
        <p> Air Date: {props.airDate}</p>
      </EpiCardWrapper>
    </div>
  )
}
