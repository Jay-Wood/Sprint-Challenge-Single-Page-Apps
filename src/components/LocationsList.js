import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import LocationCard from './LocationCard';

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
        <div>
           <h2> Locations, man! </h2>     
        </div>
    )

}
