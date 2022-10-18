import React from "react";
import ModalForm from "./ModalForm";
import Tabla from "./Tabla";
import "../stylesheets/Examen.css";

function Examen() {
  const url = 'https://serviciosdigitalesplus.com/servicio/servicio.php?';
  const clave = '201846714';

  const[inputs, setInputs] = React.useState({
    id: '',
    nom: '',
    app: '',
    tel: '',
  }); 

  const[datos, setDatos] = React.useState([]);

  React.useEffect(() => {
    getDatos();
  }, []);

  const getDatos = () => {
    const link = `${url}tipo=1&clave=${clave}`;
    fetch(link)
      .then(res => res.json())
      .then(data => {
        setDatos(data.dato);
      });
  };

  const limpiarInputs = () => setInputs({id: '', nom: '', app: '', tel: '',}); 

  const getInputs = (e) => {
    const { target } = e;
    const { name, value } = target;
    const aux = {
      ...inputs,
      [name]: value,
    }
    console.log(aux);
    setInputs(aux);
  };

  const crear = (e) => {
    e.preventDefault();
    const link = `${url}tipo=2&nom=${inputs.nom}&app=${inputs.app}&tel=${inputs.tel}&clave=${clave}`;
    fetch(link)
      .then(() => {
        alert("CREAR OK");
        limpiarInputs();
        getDatos();
      });
  };

  const modificar = (e) => {
    e.preventDefault();
    const link = `${url}tipo=3&nom=${inputs.nom}&app=${inputs.app}&tel=${inputs.tel}&clave=${clave}&id=${inputs.id}`;
    console.log(link);
    fetch(link)
      .then(() => {
        alert("MODIFICAR OK");
        limpiarInputs();
        getDatos();
      });
  };

  const eliminar = (e) => {
    e.preventDefault();
    const link = `${url}tipo=4&clave=${clave}&id=${inputs.id}`;
    fetch(link)
      .then(() => {
        alert("ELIMINAR OK");
        limpiarInputs();
        getDatos();
      });
  };

  return(
    <>
      <div className="botonera">
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Alta">Agregar Usuario</button>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modificar">Modificar Usuario</button>
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Eliminar">Eliminar Usuario</button>
      </div> 
      
      <div className="tabla-contenedor">
        <Tabla datos={datos}/>
      </div>

      <ModalForm id="Alta" controlInputs={getInputs} accion={crear}/>
      <ModalForm id="Modificar" controlInputs={getInputs} accion={modificar}/>
      <ModalForm id="Eliminar" controlInputs={getInputs} accion={eliminar}/>
    </>
  );
};

export default Examen;

//<button className="btn btn-primary" onClick={getDatos}>Chanchito feiz</button>


/*PENDIENTES:
  COMPLETAR CSS
  SWEET ALERT
  LIMPIAR INPUTS
  DATOS CHIDOS
  VER METODO MODIFICAR SI SE PUEDEN FILTRAR DATOS
*/