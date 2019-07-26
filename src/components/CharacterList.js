import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [charData, setCharData] = useState([])

  useEffect( () => {
  Axios.get("https://rickandmortyapi.com/api/character/"
    ).then(res => {
      setCharData(res.data.results)
    })
    .catch(res => {
      alert ("There was an error retrieving data: ", res)})

  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [])

  console.log("charData outside", charData)

  return( 
    <section className='character-list grid-view'>
      <div> 
        
        {console.log("charData inside return", charData)}
        {charData.map(char => ( 
          <CharacterCard 
            name = {char.name}
            key = {char.name}
            status = {char.status}
            species = {char.species}
            type = {char.type}
            image = {char.image}
          />
        ))}
      </div>
    </section>)

}
