import React from "react";
import "../stylesheets/Tabla.css";

function Tabla({ datos }) {
  return(
    <table className="tabla">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        {datos.map(dato => <tr key={dato.id}>
          <td>{dato.id}</td>
          <td>{dato.nom}</td>
          <td>{dato.app}</td>
          <td>{dato.tel}</td>
        </tr>)}
      </tbody>
    </table>
  );
};

export default Tabla;