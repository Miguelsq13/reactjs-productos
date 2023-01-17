import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { productos as data } from "../data/productos";

export const ProductoContext = createContext();

export function ProductoContextProvider(props) {
  const [productos, setProductos] = useState([]);
  const [cambios, setCambios] = useState(0);

  function crearProducto(producto) {
    setProductos([
      ...productos,
      {
        id: productos.length,
        descripcion: producto.descripcion,
        producto: producto.producto,
        disco: producto.disco,
      },
    ]);
  }
  /*
  function borrarProducto(productoId) {
    setProductos(productos.filter((producto) => producto.id !== productoId));
  }
  */

  function borrarProducto(id) {
    fetch(
      `https://nodejs-mongodb-railway-production.up.railway.app/api/productos/${id}`,
      { method: "DELETE" }
    ).then((response) => console.log("response", response));
  }

  useEffect(() => {
    setProductos(data);
  }, []);

  return (
    <ProductoContext.Provider
      value={{
        productos,
        borrarProducto,
        crearProducto,
        cambios,
        setCambios,
      }}
    >
      {props.children}
    </ProductoContext.Provider>
  );
}
