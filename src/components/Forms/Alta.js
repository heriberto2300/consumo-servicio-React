import React from "react";
import limpiarInputs from "../lib/limpiarInputs";
import getDatoInput from "../lib/getDatoInput";

function Alta({ datosInputs, setDatosInputs, accion }) {
  
  const manejarCambio = (e) => {
    getDatoInput(e, datosInputs, setDatosInputs);
  }

  const submit = (e) => {
    accion(e);
    console.log(datosInputs);
    limpiarInputs(e, 3);
  };

  return(
    <form className="row g-3" onSubmit={submit}>
      <div className="col-md-6">
        <label htmlFor="nom" className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nom" required onChange={manejarCambio}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="app" className="form-label">Apellido</label>
        <input type="text" className="form-control" name="app" required onChange={manejarCambio}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="tel" className="form-label">Telefono</label>
        <input type="tel" className="form-control" name="tel" required onChange={manejarCambio}/>
      </div>
      <button type="submit" className="btn btn-primary">Alta</button> 
    </form> 
  );
}

export default Alta;