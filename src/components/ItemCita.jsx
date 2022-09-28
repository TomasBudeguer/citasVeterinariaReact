import { Card, Button, ListGroup, Badge } from "react-bootstrap";
import '../style.css'
const ItemCita = () => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card className="bgCard">
        <Card.Body>
          <Card.Title>Mascota:</Card.Title>
          <Card.Subtitle>Dueño:</Card.Subtitle>
          <hr />
          <ListGroup>
            <ListGroup.Item>Fecha: <Badge bg="secondary" className="fs-6 ms-4">12/12/2022</Badge> </ListGroup.Item>
            <ListGroup.Item>Hora: <Badge bg="secondary" className="fs-6 ms-5">19:44</Badge></ListGroup.Item>
            <ListGroup.Item>Sintomas: </ListGroup.Item>
          </ListGroup>
          <hr />
          <div className="d-flex justify-content-end">
            <Button variant="danger">Borrar</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemCita;
