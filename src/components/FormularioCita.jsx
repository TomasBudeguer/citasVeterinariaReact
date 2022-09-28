import { Form, Button } from "react-bootstrap";
const FormularioCita = () => {
  return (
    <div>
      <Form className="border border-dark rounded p-3">
        <h5>Llenar el formulario para crear una cita</h5>
        <hr className="border border-dark"/>
        <Form.Group className="mb-3" controlId="formBasicMascota">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Nombre de la mascota</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control type="text" placeholder="Nombre de la mascota" />
            </aside>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDueño">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Nombre del dueño</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control type="text" placeholder="Nombre del dueño" />
            </aside>
          </div>
        </Form.Group>
        <div className="row">
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicFecha">
              <div className="row align-items-center">
                <aside className="col-sm-12 col-md-3 col-lg-4">
                  <Form.Label>Fecha</Form.Label>
                </aside>
                <aside className="col-sm-12 col-md-9 col-lg-6">
                  <Form.Control type="date" />
                </aside>
              </div>
            </Form.Group>
          </aside>
          <aside className="col-sm-12 col-md-12 col-lg-6">
            <Form.Group className="mb-3" controlId="formBasicHora">
              <div className="row align-items-center">
                <aside className="col-sm-12 col-md-3 col-lg-1">
                  <Form.Label>Hora</Form.Label>
                </aside>
                <aside className="col-sm-12 col-md-9 col-lg-6">
                  <Form.Control type="time" />
                </aside>
              </div>
            </Form.Group>
          </aside>
        </div>
        <Form.Group className="mb-3" controlId="formBasicSintomas">
          <div className="row align-items-center">
            <aside className="col-sm-12 col-md-3 col-lg-2">
              <Form.Label>Sintomas</Form.Label>
            </aside>
            <aside className="col-sm-12 col-md-9 col-lg-10">
              <Form.Control type="text" placeholder="Describa los sintomas" />
            </aside>
          </div>
        </Form.Group>
        <hr className="border border-dark"/>
        <div className="d-flex justify-content-center">
          <Button variant="secondary" type="submit">
            Agregar nueva cita
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormularioCita;
