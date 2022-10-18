import React from "react";
import Datos from "./Datos";

function Modificar({ controlInputs }) {
  return(
    <>
      <div className="col-md-12">
        <label htmlFor="id" className="form-label">ID</label>
        <input type="text" className="form-control" name="id" required onChange={controlInputs}/>
      </div>
      <Datos controlInputs={controlInputs}/>
    </>
  );
};

export default Modificar;