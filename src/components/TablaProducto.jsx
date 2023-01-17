import { useContext, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { ProductoContext } from "../context/ProductoContext";
import Tabla from "./Tabla";

const TablaProducto = () => {
  const { borrarProducto, cambios } = useContext(ProductoContext);
  const [productos, setProductos] = useState([]);

  const getProductos = () => {
    fetch(
      "https://nodejs-mongodb-railway-production.up.railway.app/api/productos"
    )
      .then((response) => response.json())
      .then((json) => setProductos(json));
  };

  useEffect(() => {
    getProductos();
  }, [cambios]);

  const columnas = [
    { field: "id", headerName: "Id", width: 150, hide: true },
    {
      field: "descripcion",
      headerName: "Descripción",
      width: 450,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "producto",
      headerName: "Producto",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "disco",
      headerName: "Disco",
      width: 120,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 150,
      align: "center",
      headerAlign: "center",
      renderCell: (params) => (
        <Button
          color="error"
          variant="contained"
          size="small"
          onClick={() => borrarProducto(params.row._id)}
        >
          Eliminar
        </Button>
      ),
    },
  ];

  if (productos.length === 0) {
    return <h1>No hay productos aun</h1>;
  }

  return (
    <div style={{ height: 670, width: 1024 }}>
      <Tabla filas={productos} columnas={columnas} />
    </div>
  );
};

export default TablaProducto;
