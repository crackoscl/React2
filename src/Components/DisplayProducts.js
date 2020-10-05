import React from "react";
import {
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
} from "reactstrap";
import ProductSheet from "./Product";

function Product(props) {
  return (
    <Col sm="4" body outline color="primary">
      <Card className="Card">
        <CardImg src={props.imagen}></CardImg>
        <CardBody>
          <CardTitle>{props.titulo}</CardTitle>
          <CardSubtitle>
            <b>Valor: </b>
            {props.precio}
          </CardSubtitle>
          <CardText>{props.descripcion}</CardText>
          <ProductSheet props={props} />
        </CardBody>
      </Card>
    </Col>
  );
}

export default Product;
