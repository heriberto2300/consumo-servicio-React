import React from "react";
import getDatoInput from "../lib/getDatoInput";
import limpiarInputs from "../lib/limpiarInputs";

function Eliminar({ datosInputs, setDatosInputs, accion }) {

  const manejarCambio = (e) => {
    getDatoInput(e, datosInputs, setDatosInputs);
  };

  const submit = (e) => {
    console.log(datosInputs);
    accion(e);
    limpiarInputs(e, 1);
  };

  return(
    <form className="row g-3" onSubmit={submit}>
      <div className="col-md-12">
        <label htmlFor="id" className="form-label">ID</label>
        <input type="text" className="form-control" name="id" required onChange={manejarCambio}/>
      </div>  
      <button type="submit" className="btn btn-primary">Eliminar</button>
    </form>
  );
}

export default Eliminar;
