function limpiarInputs(e, totalInputs) {
  for(let i = 0; i < totalInputs; i++) {
    e.target[i].value = "";
  }    
}
  
export default limpiarInputs;