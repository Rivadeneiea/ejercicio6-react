import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const itemColor = ({ nombreColor, borrarColor }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreColor}
      <div
        style={{ backgroundColor: `${nombreColor}`, width: "30px" }}
      ></div>{" "}
      <Button variant="danger" onClick={() => borrarColor(nombreColor)}>
        borrar
      </Button>
    </ListGroup.Item>
  );
};

export default itemColor;
