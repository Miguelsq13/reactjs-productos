import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { divStyles, textFieldStyles, buttonStyles } from "../styles/styles";
import { ProductoContext } from "../context/ProductoContext";

const Formulario = () => {
  const [descripcion, setDescripcion] = useState("");
  const [producto, setProducto] = useState("");
  const [disco, setDisco] = useState("");

  const { setCambios } = useContext(ProductoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      descripcion,
      producto,
      disco,
    };
    fetch(
      "https://nodejs-mongodb-railway-production.up.railway.app/api/productos",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      }
    ).then((response) => console.log("response", response));
    setCambios(Math.floor(Math.random() * 100000));
    setDescripcion("");
    setProducto("");
    setDisco("");
  };

  return (
    <div style={divStyles}>
      <TextField
        id="descripcion"
        label="Descripción"
        variant="outlined"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
        autoComplete="off"
        autoFocus
        sx={textFieldStyles}
      />
      <TextField
        id="producto"
        label="Producto"
        variant="outlined"
        value={producto}
        onChange={(e) => setProducto(e.target.value)}
        autoComplete="off"
        sx={textFieldStyles}
      />
      <TextField
        id="disco"
        label="Disco"
        variant="outlined"
        value={disco}
        onChange={(e) => setDisco(e.target.value)}
        autoComplete="off"
        sx={textFieldStyles}
      />
      <Button variant="contained" onClick={handleSubmit} sx={buttonStyles}>
        Ingresar
      </Button>
    </div>
  );
};

export default Formulario;
