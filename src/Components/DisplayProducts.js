import React from 'react';
import { Col,Card,CardBody,CardTitle,CardText,CardImg,CardSubtitle} from 'reactstrap';
import ProductSheet from './Product'

class Product extends React.Component{
    render(){
       return(
            <Col sm="4" body outline color="primary">
                <Card className="Card">
                    <CardImg src={this.props.imagen}></CardImg>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Valor: </b>{this.props.precio}</CardSubtitle>
                        <CardText>
                          {this.props.descripcion}
                        </CardText>
                        <ProductSheet props={this.props}/>
                    </CardBody>
                </Card>
           </Col>
       );
    }
} 

export default Product;