import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import axios from 'axios';

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(results => {
          console.log('/api/location/ results:', results.data.info)
          setLocations(results.data.results)
        })
        .catch(err => console.log('major error'))
    }, [])
  
    return (
      <section className="character-list grid-view">
        {
          locations.map(location => {
            return (
              <LocationCard
                key={location.id}
                name={location.name}
                dimension={location.dimension}
                type={location.type}
                residents={location.residents.length} />
            )
          })
        }
      </section>
    )
  }