import React from 'react';
import { Card } from 'semantic-ui-react';


export default function LocationCard(props) {
  const {name, dimension, type, residents} = props;
  let residentsText = 'resident';

  if (residents === 1) {
    residentsText = 'resident';
  }

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          Dimension: {dimension}
          <br/>
          Type: {type}
        </Card.Description>
      </Card.Content>
      <Card.Content more>
        {residents} {residentsText}
      </Card.Content>
    </Card> 
  )
}