import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import ListaColores from "./ListaColores";
import { useState } from "react";

const FormularioColor = () => {
  const [color, setColor] = useState("");
  const [listaColores, setListaColores] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
  };
  const borrarColor = (colorBorrar) => {
    let listaColoresFiltrada = listaColores.filter(
      (itemColor) => itemColor !== colorBorrar
    );
    setListaColores(listaColoresFiltrada);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="Tarea">
          <Form.Control
            type="text"
            placeholder="ingrese un color ej: blue"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />{" "}
          <Button variant="primary" type="submit">
            agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaColores
        propslistaColores={listaColores}
        borrarColor={borrarColor}
      ></ListaColores>
    </>
  );
};

export default FormularioColor;
