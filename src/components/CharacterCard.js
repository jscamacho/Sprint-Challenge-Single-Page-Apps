import React from "react";
import { Card, Image, Icon } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const {name, status, species, image, location, origin } = props;

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{species} {status}</span>
        </Card.Meta>
        <Card.Description>
          Location: {location}<br/>
          Origin: {origin}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='user' />
        Episodes
      </Card.Content>
    </Card>)
  }
