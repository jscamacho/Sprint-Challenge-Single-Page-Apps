import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {

    Axios
    .get('https://rickandmortyapi.com/api/character/')
    then(response => {
      setCharacter(response.data.results);
    })
    .catch(error => {console.log ('Major Error');
  });
  }, []);

  if(!character){
    return <div>Loading Character...
    </div>
  }
  else { 
   return 
    <section className="character-list grid-view">
      <h2>{character.map((person) => <CharacterCard key = {person.id}{...person} /> )}</h2>
    </section>
  ;}
}
