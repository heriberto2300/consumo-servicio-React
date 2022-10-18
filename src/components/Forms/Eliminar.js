import React from "react";

function Eliminar({ controlInputs }) {
  return(
    <div className="col-md-12">
        <label htmlFor="id" className="form-label">ID</label>
        <input type="text" className="form-control" name="id" required onChange={controlInputs}/>
    </div>
  );
};

export default Eliminar;