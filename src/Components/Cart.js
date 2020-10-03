import React from 'react';
import {Button,Popover,PopoverHeader,PopoverBody,Badge,Table} from 'reactstrap';
import ListCart from './ListCart'


class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            popoverOpen:false,
            ListCart
        };

        this.toggle = this.toggle.bind(this);
        
    };

    toggle(){
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

 
    render(){
        const ArrayCart = ListCart.map(
            (ListaCart,i) => {
                return(
                    <tr key={i}>
                        <td>{(i += 1)}</td>
                            <td>{ListCart.nombre}</td>
                            <td>{ListCart.precio}</td>
                    </tr>  
                )
            }
        );

        const sum = ListCart.map(item => item.precio)
        .reduce((acc,el) => parseInt(acc) + parseInt(el),0)
       

        return(
            <div>
                <Button id="Popover1"color="warning">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="secondary">{ArrayCart.length}</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle}>
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
                        <tbody>
                           {ArrayCart}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td>{sum.toLocaleString('es',20)} CPL</td>
                            </tr>
                        </tfoot>
                    </Table>
                       </PopoverBody> 
                </Popover>
            </div>
        );
    }
}

export default Cart;