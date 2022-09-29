import { Card, Button, ListGroup, Badge } from "react-bootstrap";
import '../style.css'
const ItemCita = (props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-3 my-4">
      <Card className="bgCard">
        <Card.Body>
          <Card.Title>Mascota: {props.mascota}</Card.Title>
          <Card.Subtitle>Dueño: {props.duenio}</Card.Subtitle>
          <hr />
          <ListGroup>
            <ListGroup.Item>Fecha: <Badge bg="secondary" className="fs-6 ms-4">{props.fecha}</Badge> </ListGroup.Item>
            <ListGroup.Item>Hora: <Badge bg="secondary" className="fs-6 ms-5">{props.hora}</Badge></ListGroup.Item>
            <ListGroup.Item>Sintomas: {props.sintomas}</ListGroup.Item>
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
