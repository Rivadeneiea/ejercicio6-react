import ListGroup from "react-bootstrap/ListGroup";
import ItemColor from "./ItemColor";

const ListaColores = ({ propslistaColores, borrarColor }) => {
  return (
    <ListGroup>
      {propslistaColores.map((color, index) => (
        <ItemColor
          key={index}
          nombreColor={color}
          borrarColor={borrarColor}
        ></ItemColor>
      ))}
    </ListGroup>
  );
};

export default ListaColores;
