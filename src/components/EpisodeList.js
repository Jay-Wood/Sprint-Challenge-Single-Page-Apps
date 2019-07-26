import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import EpisodeCard from './EpisodeCard';
import styled from "styled-components";

// const LocationListWrapper = styled.div`
//     display: flex;
// `

export default function EpisodeList() {
    const [episodeData, setEpisodeData] = useState([])

    useEffect( () => {
        Axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then(res => {
            setEpisodeData(res.data.results)
          })
          .catch(res => {
            alert ("There was an error retrieving data: ", res)})
    }, [])

    console.log("epi data outside axios", episodeData);

    return (
        <div className='grid-view'>
           <h2> Episodes, fool! </h2>     
            {episodeData.map(epi => (
                <EpisodeCard 
                    name = {epi.name}
                    key = {epi.id}
                    airDate = {epi.air_date}
                   
                />
            ))}
        </div>
    )

}