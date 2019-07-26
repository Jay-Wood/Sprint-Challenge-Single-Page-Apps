import React from 'react'
import styled from "styled-components";

const CardWrapper = styled.div`
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

// export default function LocationCard ({ name, type, dimension, residents }) {
//   // image={image}
//   return (<span>todo: location</span>
//   )
// }

export default function LocationCard (props) {
  return (
    <div>
      <CardWrapper>
        <h2> {props.name} </h2>
        <p> Type: {props.type}</p>
        <p> Dimension: {props.dimension}</p>
      </CardWrapper>
    </div>
  )
}
