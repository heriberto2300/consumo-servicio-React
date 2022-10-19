function getDatoInput(e, dato, setDato) {
  const { target } = e;
  const { name, value } = target;
  const data = {
    ...dato,
    [name]: value,
  };
  setDato(data);
}

export default getDatoInput;

