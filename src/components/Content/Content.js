import React from 'react';
import { Row, Col, Grid, Card, Button, CardTitle, CardText } from 'reactstrap';

const Content = (props) => {
  return (

    <div className="container_row">
      <div className="teehee1">

        <div class="row">
          <Card body>
            <div class="col-sm-2">
                <img className="card-img-top" src="https://cdn.shopify.com/s/files/1/1061/1924/products/Nerd_with_Glasses_Emoji_2a8485bc-f136-4156-9af6-297d8522d8d1_large.png" alt="Card image cap"></img>
            </div>

      <div className="spacer"></div>
          <div className="teehee"  style={{ paddingLeft: 16 }} >
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supportingsupportingsupportingsupportingsupportingsupportingsupporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </div>

        </Card>

      </div>

      </div>
    </div>


  );
};

export default Content;