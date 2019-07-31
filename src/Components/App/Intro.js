import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Intro = () => (
    <Card>
    <Image
src="https://react.semantic-ui.com/images/avatar/large/ade.jpg"
wrapped
ui={false}
/>
<Card.Content>
<Card.Header>Proj1</Card.Header>
<Card.Meta>Joined in 2016</Card.Meta>
<Card.Description>Web project 1</Card.Description>
</Card.Content>
<Card.Content extra>
<a>
<Icon name="user" />
    More
    </a>
    </Card.Content>
    </Card>
);

export default Intro;
