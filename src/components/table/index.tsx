import { DataGrid, GridColDef } from "@mui/x-data-grid";
import CreateButton from "./createButton";
import SearchField from "./searchField";
import { useState } from "react";
import ModalCreateUser from "./modalCreateUser";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "nome", headerName: "Nome", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  {
    field: "idade   ",
    headerName: "Idade",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.nome || ""} ${row.email || ""}`,
  },
];

const rows = [
  { id: 1, nome: "Snow", email: "Jon", idade: 35 },
  { id: 2, nome: "Lannister", email: "Cersei", idade: 42 },
  { id: 3, nome: "Lannister", email: "Jaime", idade: 45 },
  { id: 4, nome: "Stark", email: "Arya", idade: 16 },
  { id: 5, nome: "Targaryen", email: "Daenerys", idade: null },
  { id: 6, nome: "Melisandre", email: null, idade: 150 },
  { id: 7, nome: "Clifford", email: "Ferrara", idade: 44 },
  { id: 8, nome: "Frances", email: "Rossini", idade: 36 },
  { id: 9, nome: "Roxie", email: "Harvey", idade: 65 },
];

export default function CustomTable() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <SearchField />
      <CreateButton click={handleOpen} />
      <ModalCreateUser open={open} handleClose={handleClose} />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
