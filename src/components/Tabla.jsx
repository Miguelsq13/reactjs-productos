import { DataGrid, GridToolbarQuickFilter, esES } from "@mui/x-data-grid";
import { useState } from "react";

const Tabla = ({ filas, columnas }) => {
  const [pageSize, setPageSize] = useState(10);

  return (
    <DataGrid
      rows={filas}
      columns={columnas}
      components={{ Toolbar: GridToolbarQuickFilter }}
      disableSelectionOnClick
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[10, 20, 40]}
      pagination
      getRowId={(row) => row._id}
      localeText={esES.components.MuiDataGrid.defaultProps.localeText}
    />
  );
};

export default Tabla;
