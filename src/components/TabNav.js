
import React from "react";
import {  Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


export default function TabNav(props)  {

  return (
    // <Tab panes={panes} />
    <Menu tabular>
      <NavLink to='/'>
        <Menu.Item name='Home' icon='home' />
      </NavLink>
      <NavLink to='/characters'>
        <Menu.Item name='Characters' icon='users' />
      </NavLink>
      <NavLink to='/locations'>
        <Menu.Item name='Locations' icon='map' />
      </NavLink>
      <NavLink to='/episodes'>
        <Menu.Item name='Episodes' icon='video' />
      </NavLink>
    </Menu>
  )
};
