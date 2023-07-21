import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColor from "./components/FormularioColor";

function App() {
  return (
    <>
      <Container className=" my-5 mainPage ">
        <h1 className="display-5 text-center text-light">Paleta de colores</h1>
        <FormularioColor></FormularioColor>
      </Container>

      <footer className="text-center ">
        <p>@ jr todos los derechos reservados</p>{" "}
      </footer>
    </>
  );
}

export default App;
