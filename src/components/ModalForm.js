import React from "react";
import Datos from "./Forms/Datos";
import Eliminar from "./Forms/Eliminar";
import Modificar from "./Forms/Modificar";

function ModalForm({ id, controlInputs, accion }) {

  const forms = {
    Alta: <Datos controlInputs={controlInputs}/>,
    Modificar: <Modificar controlInputs={controlInputs}/>,
    Eliminar: <Eliminar controlInputs={controlInputs}/>,
  };

  return(
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{id}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={accion}>
              {forms[id]}
              <button type="submit" className="btn btn-primary">{id}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;