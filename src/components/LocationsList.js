import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';
import styled from "styled-components";

// const LocationListWrapper = styled.div`
//     display: flex;
// `

export default function LocationsList() {
    const [locationData, setLocationData] = useState([])

    useEffect( () => {
        Axios
        .get("https://rickandmortyapi.com/api/location/")
        .then(res => {
            setLocationData(res.data.results)
          })
          .catch(res => {
            alert ("There was an error retrieving data: ", res)})
    }, [])

    console.log("loc data outside axios", locationData);

    return (
        <div className='character-list grid-view'>
           <h2> Locations, man! </h2>     
            {locationData.map(loc => (
                <LocationCard 
                    name = {loc.name}
                    key = {loc.id}
                    type = {loc.type}
                    dimension = {loc.dimension}
                />
            ))}
        </div>
    )

}
