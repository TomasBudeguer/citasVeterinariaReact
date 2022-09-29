import ItemCita from "./ItemCita";

const ListaCitas = ({ arregloCitas }) => {
  return (
    <div className="row">
      {arregloCitas.map((cita, posicion) => (
        <ItemCita
          key={posicion}
          mascota={cita.mascota}
          duenio={cita.duenio}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        ></ItemCita>
      ))}
    </div>
  );
};

export default ListaCitas;
