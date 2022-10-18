import React from "react";

function Datos({ controlInputs }) {
  return(
    <>
      <div className="col-md-6">
        <label htmlFor="nom" className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nom" required onChange={controlInputs}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="app" className="form-label">Apellido</label>
        <input type="text" className="form-control" name="app" required onChange={controlInputs}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="tel" className="form-label">Telefono</label>
        <input type="tel" className="form-control" name="tel" required onChange={controlInputs}/>
      </div>
    </>
  );
};

export default Datos;