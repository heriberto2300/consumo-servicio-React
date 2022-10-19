import React from "react";
import getDatoInput from "../lib/getDatoInput";
import limpiarInputs from "../lib/limpiarInputs";

function Modificar({ datosInputs, setDatosInputs, accion, getUsuario }) {
  
  const[editar, setEditar] = React.useState(false); 
  
  const setInputs = (e) => {
    const usuario = getUsuario(e.target.value);
    console.log(usuario);
    if(!usuario) {
      setDatosInputs({id: '', nom: '', app: '', tel: ''});
      setEditar(false);
      return;
    }
    setDatosInputs({
      id: usuario.id,
      nom: usuario.nom,
      app: usuario.app,
      tel: usuario.tel,
    });
    setEditar(true);
  }

  const manejarCambio = (e) => {
    getDatoInput(e, datosInputs, setDatosInputs);
  }

  const submit = (e) => {
    accion(e);
    console.log(datosInputs);
    setEditar(false);
    limpiarInputs(e, 4);
  };

  return(
    <form className="row g-3" onSubmit={submit}>
      <div className="col-md-12">
        <label htmlFor="id" className="form-label">ID</label>
        <input type="text" className="form-control" name="id" required onChange={manejarCambio} onBlur={setInputs}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="nom" className="form-label">Nombre</label>
        <input type="text" className="form-control" name="nom" onChange={manejarCambio} value={datosInputs.nom} disabled={!editar}/>
      </div>
      <div className="col-md-6">
        <label htmlFor="app" className="form-label">Apellido</label>
        <input type="text" className="form-control" name="app" onChange={manejarCambio} value={datosInputs.app} disabled={!editar}/>
      </div>
      <div className="col-md-12">
        <label htmlFor="tel" className="form-label">Telefono</label>
        <input type="tel" className="form-control" name="tel" onChange={manejarCambio} value={datosInputs.tel} disabled={!editar}/>
      </div> 
      <button type="submit" className="btn btn-primary" disabled={!editar}>Modificar</button>
    </form> 
  );
}

export default Modificar;