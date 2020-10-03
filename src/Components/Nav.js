
import React from 'react';
import Cart from './Cart'

import { Nav,NavbarBrand,NavItem,Navbar} from 'reactstrap';


class Navigator  extends React.Component{
    render(){
        return(
            <Navbar color="ligth" expand="md">
    <NavbarBrand href="/">{this.props.titulo}</NavbarBrand>    
                <Nav className="ml-auto" Navbar>
                    <NavItem>
                        <Cart/>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Navigator;