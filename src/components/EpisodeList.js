import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import EpisodeCard from './EpisodeCard'

function EpisodesList() {
  const [episode, setEpisode] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisode(response.data.results)
        console.log(response)
      })
      .catch(err => console.log('major error'))
  }, [])

  return (
    <div className='episode-lists'>
      {episode.map(episode => (
        <div className='episode-card'>
          <EpisodeCard key={episode.id} episode={episode} />
        </div>
      ))}
    </div>
  )
}

export default EpisodesList