import { Button } from "@mui/material";

interface CreateButtonProps {
  click: () => void;
}
export default function CreateButton({ click }: CreateButtonProps) {
  return (
    <Button variant="contained" onClick={click}>
      Criar um usuario
    </Button>
  );
}
