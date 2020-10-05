import React from "react";
import {
  Button,
  Popover,
  PopoverHeader,
  PopoverBody,
  Badge,
  Table,
} from "reactstrap";
import { appContext } from "../context/context";

function Cart() {
  const [popoverOpen, setPopoverOpen] = React.useState(false);
  const [data] = React.useContext(appContext);
  console.log(data)

  const toggle = () => setPopoverOpen(!popoverOpen);

  const ArrayCart = data.map((list, i) => {
    return (
      <tr key={i}>
        <td>{(i += 1)}</td>
        <td>{list.titulo}</td>
        <td>{list.precio}</td>
      </tr>
    );
  });

  
  const sum = data
    .map((item) => item.precio)
    .reduce((acc, el) => parseInt(acc) + parseInt(el), 0);

  return (
    <div>
      <Button id="Popover1" color="warning">
        <span className="material-icons">shopping_cart</span>
        <Badge color="secondary">{ArrayCart.length}</Badge>
      </Button>
      <Popover
        target="Popover1"
        placement="bottom"
        isOpen={popoverOpen}
        toggle={toggle}
      >
        <PopoverHeader>Listado de compras</PopoverHeader>
        <PopoverBody>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>{ArrayCart}</tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td>{sum.toLocaleString("es", 20)} CPL</td>
              </tr>
            </tfoot>
          </Table>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default Cart;
