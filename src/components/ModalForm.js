import React from "react";
import Alta from "./Forms/Alta";
import Eliminar from "./Forms/Eliminar";
import Modificar from "./Forms/Modificar";

function ModalForm({ id, datosInputs, setDatosInputs, accion, getUsuario }) {

  const forms = {
    Alta: <Alta datosInputs={datosInputs} setDatosInputs={setDatosInputs} accion={accion}/>,
    Modificar: <Modificar datosInputs={datosInputs} setDatosInputs={setDatosInputs} accion={accion} getUsuario={getUsuario}/>,
    Eliminar: <Eliminar datosInputs={datosInputs} setDatosInputs={setDatosInputs} accion={accion}/>,
  }

  return(
    <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`${id}Label`}>{id}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {forms[id]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;