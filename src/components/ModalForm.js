import React from "react";

function ModalForm({ id, controlInputs, accion }) {

  const submit = (e) => {
    accion(e);
    if(id === 'Alta') {
      e.target[0].value = '';
      e.target[1].value = '';
      e.target[2].value = '';
      return;
    }
    if(id === 'Eliminar') {
      e.target[0].value = '';
      return;
    }

    e.target[0].value = '';
    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';
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
            <form className="row g-3" onSubmit={submit}>
              { id === 'Eliminar' || id === 'Modificar' ? 
                <div className="col-md-12">
                  <label htmlFor="id" className="form-label">ID</label>
                  <input type="text" className="form-control" name="id" required onChange={controlInputs}/>
                </div> : ''
              }
              { id !== 'Eliminar' ? 
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
                </> : ''
              }
              <button type="submit" className="btn btn-primary">{id}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;