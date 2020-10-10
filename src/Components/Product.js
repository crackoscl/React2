import React from "react";
import {
  CardImg,
  Container,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { appContext } from "../context/context";

function ProductSheet(props) {


  const [setData] = React.useContext(appContext);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);


   const AddCart = () =>{
    setData.push({'titulo':props.props.titulo,'precio':props.props.precio})
    setModal(false)
   }

  return (
    <Container>
      <Button onClick={toggle}>Ver ficha</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader>{props.props.titulo}</ModalHeader>
        <ModalBody>
          <CardImg src={props.props.imagen}></CardImg>
          <p>El detalle del producto selecionado es el siguiente:</p>
          {props.props.descripcion}
          <p>
            Este producto tiene un valor de <b>{props.props.precio}</b>{" "}
            pesos.
          </p>
        </ModalBody>

        <ModalFooter className="modalFooter">
          <Button color="primary" onClick={AddCart}>
            Agregar al Carrito
          </Button>
          <Button color="secondary" onClick={toggle}>
            Volver atrás
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ProductSheet;
