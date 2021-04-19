import React from 'react';
import {Card, Image } from 'semantic-ui-react';
import './ItemList.css';

function ItemList({ p }) {
  return (
    <div className="asd">
      {[p].map((p) => {
        return (
          <Card key={p.id}>
            <Image src={p.pictureUrl} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{p.title}</Card.Header>
              <Card.Meta>
                <span>{p.description}</span>
              </Card.Meta>
              <Card.Description>
              </Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </div>
  );
}

export default ItemList;