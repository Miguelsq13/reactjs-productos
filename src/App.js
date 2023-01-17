import Formulario from "./components/Formulario";
import TablaProducto from "./components/TablaProducto";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Grid item lg={12}>
        <Formulario />
      </Grid>
      <Grid item lg={12}>
        <TablaProducto />
      </Grid>
    </Grid>
  );
}

export default App;
