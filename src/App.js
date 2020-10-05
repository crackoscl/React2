import React from "react";
import "./App.css";
import { Container, Row } from "reactstrap";
import Product from "./Components/DisplayProducts";
import Navigator from "./Components/Nav";
import Provider from "./context/context";

function App() {
  const [data, SetData] = React.useState([]);

  React.useEffect(() => {
    GetData();
  }, []);

  const GetData = async () => {
    const data = await fetch("http://www.micompleto.cl/wp-json/wp/v2/menu");
    const DataList = await data.json();
    SetData(DataList);
  };

  const ArrayComponents = data.map((listproduct, i) => {
    return (
      <Product
        key={i}
        titulo={listproduct.acf.nombre}
        imagen={listproduct.acf.imagen.url}
        descripcion={listproduct.acf.descripcion}
        precio={listproduct.acf.valor}
      />
    );
  });

  return (
    <Container>
      <Provider>
      <Navigator titulo="Mi primer sitio de compras con React" />
      <Row>{ArrayComponents}</Row>
      </Provider>
    </Container>
  );
}

export default App;
