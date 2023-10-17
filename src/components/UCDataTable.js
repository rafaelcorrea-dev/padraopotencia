import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 10 },

  { field: "descricao", headerName: "Descrição", width: 150, editable: true },
  {
    field: "complemento",
    headerName: "Complemento da UC",
    width: 150,
    editable: true,
  },
  { field: "tipo", headerName: "Tipo de UC", width: 150, editable: true },
];

function UCDataTable({ data }) {
  return (
    <div style={{ height: 700, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default UCDataTable;
