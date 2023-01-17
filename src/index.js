import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductoContextProvider } from "./context/ProductoContext";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductoContextProvider>
      <App />
    </ProductoContextProvider>
  </React.StrictMode>
);

reportWebVitals();
