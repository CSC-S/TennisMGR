/*eslint-disable*/
import React, { useState } from "react";
import ".././App.css";
import Data from './data.js';

// eslint-disable-next-line
import { Button, Card } from "react-bootstrap";
import Pagination from "react-js-pagination";

function Market() {

  let [product, Setproduct] = useState(Data);

  return (

      <div className="container">
        <div className="row">
          {
            product.map((a,i)=>{
              return <Section product={product[i]} i={i} key={i}/>
            })
          }
        </div>
        <br></br>
      </div>

  );
}

function Section(props){
  return (
    <div className="col-md-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={"/img/tennis_" + [props.i] + ".jpg"}
          width="100%"
        />
        <Card.Body>
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>
            {props.product.content} <br />
            {props.product.price}
          </Card.Text>
          <Button variant="primary">구매하러가기</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Market;