
import React from 'react';
import { CardImg,Container,Button,Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import ListCart from './ListCart'


class ProductSheet extends React.Component{
    constructor(props){
        super();
        this.state = {
            modal:false,
            ListCart,
            stock: props.props.stock
            //////////////////////
        };

        this.toggle = this.toggle.bind(this);
        // this.agregarCarrito = this.agregarCarrito.bind(this); con arrow function no es necesario
    }

    toggle(){
        this.setState(prevState => ({
            modal: !prevState.modal
            
        }));
    }

    agregarCarrito = () =>{
        ListCart.push({
            "titulo": this.props.props.titulo,
            "precio": this.props.props.precio
            
        });

        

        this.setState(prevState =>({
            modal: !prevState.modal,
            stock: this.state.stock -1
        }));

    }

    
    render(){
        return(
            <Container>
                <Button onClick={this.toggle}>Ver ficha</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.titulo}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}></CardImg>
                        <p>El detalle del producto selecionado es el siguiente:</p>
                        {this.props.props.descripcion}
                            <p>Este producto tiene un valor de <b>{this.props.props.precio}</b> pesos.</p>
                    </ModalBody>

                    <ModalFooter className="modalFooter">
                        <Button color="primary" onClick={this.agregarCarrito}>Agregar al Carrito</Button>
                        <Button color="secondary" onClick={this.toggle}>Volver atrás</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default ProductSheet;