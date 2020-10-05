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


  const [data,setData] = React.useContext(appContext);
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);



  return (
    <Container>
      <Button onClick={toggle}>Ver ficha</Button>
      <Modal isOpen={modal}>
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
          <Button color="primary" onClick={()=>{
            setData(...data,{'titulo':props.props.titulo, 'precio':props.props.precio})
          }}>
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
