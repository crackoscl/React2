import React from 'react';
import './App.css';
import { Container,Row } from 'reactstrap';
import Product from './Components/DisplayProducts'
import Navigator from './Components/Nav'


class App extends React.Component{
  constructor(){
      super();
      this.state = {
        list_productdb: []
      };
  }


  componentDidMount() {
      fetch('http://www.micompleto.cl/wp-json/wp/v2/menu')
        .then((response) => {
          return response.json()
        })
        .then((list_productdb) => {
          this.setState({ list_productdb });
        })
    }


  render(){
      const ArrayComponents = this.state.list_productdb.map(
          (listproduct, i) =>{
  
              return(
                  <Product
                      key={i}
                      titulo = {listproduct.acf.nombre}
                      imagen = {listproduct.acf.imagen.url}
                      descripcion = {listproduct.acf.descripcion}
                      precio = {listproduct.acf.valor}
                  />
              )
          }
      );
      return(
          <Container>
              <Navigator titulo="Mi primer sitio de compras con React"/>
              <Row>
                  {ArrayComponents}
               </Row>
           </Container>
      ); 
  }
}

export default App;
