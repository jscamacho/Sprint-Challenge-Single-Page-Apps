import React from 'react'
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

const AppRouter = () => {

    return (
      <div>
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/locations' component={LocationsList} />
      <Route exact path='/episodes' component={EpisodeList} />
      </div>
    )
  }

  export default AppRouter;