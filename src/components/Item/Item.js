import React from 'react';
import { Card,Image} from 'semantic-ui-react';


const Item = ({title,pictureUrl}) => (
  <Card>
    <Image src={pictureUrl} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
  </Card>
)
export default Item;



