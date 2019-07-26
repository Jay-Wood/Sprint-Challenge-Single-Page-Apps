import React from 'react'
import styled from "styled-components";

const EpiCardWrapper = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  margin: 1vw;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around; 
  background-color: whitesmoke;
  opacity: 0.5;
  padding: 1%;
`;

export default function EpisodeCard (props) {
  return (
    <div>
      <EpiCardWrapper>
        <h2> {props.name} </h2>
        <p> Air Date: {props.airDate}</p>
      </EpiCardWrapper>
    </div>
  )
}
