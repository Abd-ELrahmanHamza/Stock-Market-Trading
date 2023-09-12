import { Button } from "@mui/material";

interface Props {
  children: React.ReactNode;
  props: any;
}
const SellButton = ({ children, props }: Props) => {
  return (
    <Button variant="contained" color="error" {...props}>
      {children}
    </Button>
  );
};

const BuyButton = ({ children, props }: Props) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};

export { SellButton, BuyButton };
