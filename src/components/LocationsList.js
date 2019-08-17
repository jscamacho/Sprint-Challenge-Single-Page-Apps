import React, { useEffect, useState } from "react";

export default function LocationsList() {
    const [locations, setLocations] = useState([]);
  
    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/`)
        .then(results => {
          console.log('/api/location/ results:', results.data.info)
          setLocations(results.data.results)
        })
    }, [])
  
    return <section className='location-list grid-view'>
      {locations.map(l => {
        return <LocationCard key={l.id} {...l} />;
      })}
    </section>
  }