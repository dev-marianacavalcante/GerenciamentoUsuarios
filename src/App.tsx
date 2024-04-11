import CustomTable from "./components/table";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

export default function App() {
  return (
    <Container>
      <Typography variant="h4">Lista de usuários</Typography>
      <CustomTable />
    </Container>
  );
}
