import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import Axios from "axios";

export default function CharacterList() {
  const [character, setCharacter] = useState([]);
  const [searchWord, setSearchWord] = useState('');
  

  useEffect(() => {

    Axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response);
      setCharacter(response.data.results);
    })
    .catch(error => {console.log ('Major Error');
  });
  }, [searchWord]);

   return (
    <div>
    <SearchForm onSearch={setSearchWord} />
    <section className="grid-view">
      {
        character.map(character => {
          return (
            <CharacterCard
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              image={character.image}
              location={character.location.name}
              origin={character.origin.name} />
          )
        })
      }
    </section>
    </div>
   );
}
