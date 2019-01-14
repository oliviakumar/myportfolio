import React from 'react';
import { Row, Col, Grid, Card, Button, CardTitle, CardText } from 'reactstrap';

const Content = (props) => {
  return (
    <div className="container_row" style={{height:"60%"}}>
        <div class="row">
          <Card body>
            <Row >
              <Col xs="3" style={{width:"99%", height:"60%"}}>
                <img /*style={{width:"50%", height:"60%"}} */className="card-img-top" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png" alt="Card image cap"></img>
              </Col>
              <Col xs="9">
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supportingsupportingsupportingsupportingsupportingsupportingsupporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </Col>
            </Row>
        </Card>
      </div>
    </div>


  );
};

export default Content;