import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Stock from "../../domain/entities/stock";
import { Box, TextField } from "@mui/material";
import { useAppSelector } from "../../application/hooks";
import { ErrorAlert } from "../components/Alerts";

interface BuyStocksDialogProps {
  handleClose: () => void;
  open: boolean;
  handleAction: (stock: Stock) => void;
  actionText: string;
  stock: Stock;
}
export default function BuyStocksDialog({
  handleClose,
  open,
  handleAction,
  actionText,
  stock,
}: BuyStocksDialogProps) {
  const [count, setCount] = React.useState<number>(0);
  const user = useAppSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(event.target.value));
  };
  const handleAgree = () => {
    if (actionText === "Buy") {
      console.log("here");
      if (count * stock.price > user.money) {
        setErrorMessage("You don't have enough money Go to wallet to add more");
        return;
      }

      if (count > stock.count) {
        setErrorMessage("No enough stocks to buy");
        return;
      }
    } else {
      if (count > stock.count) {
        setErrorMessage("No enough stocks to sell");
        return;
      }
    }
    setErrorMessage("");
    handleAction({ ...stock, count: count });
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          sx={{
            marginBottom: "1rem",
          }}
        >
          Enter number of stocks to {actionText}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            value={count}
            variant="filled"
            onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          {errorMessage && (
            <Box
              sx={{
                marginTop: "1rem",
              }}
            >
              <ErrorAlert text={errorMessage} />
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <Button onClick={handleAgree} autoFocus variant="contained">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
