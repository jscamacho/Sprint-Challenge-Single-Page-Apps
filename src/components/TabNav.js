import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


const welcomeLabel = createLabel("home", "Home Page")
const characterLabel = createLabel("users", "Characters")
const locationsLabel = createLabel("local", "Locations")
const episodesLabel = createLabel("show", "Episodes")

const panelsTabs = [
    { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
    { menuItem: <Menu.Item key='characters' as={Nav} to={`/characters`} content={characterLabel} /> },
  { menuItem: <Menu.Item key='locations' as={Nav} to={`/locations`} content={locationLabel} /> },
  { menuItem: <Menu.Item key='episodes' as={Nav} to={`/episodes`} content={episodeLabel} /> }
]

const TabNav = () => <Tab panels={panels} renderActiveOnly={false} />

export default TabNav
