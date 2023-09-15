import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stock from "../../domain/entities/stock";
import { Box, TextField } from "@mui/material";
import { useAppSelector } from "../../application/hooks";
import { ErrorAlert, InfoAlert } from "../components/Alerts";
import { isStringNumeric } from "../../application/utils/helper";

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
  const [count, setCount] = React.useState<string>("0");
  const user = useAppSelector((state) => state.user);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [infoMessage, setInfoMessage] = React.useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "") return setCount("");
    if (!isStringNumeric(event.target.value)) return;
    if (parseInt(event.target.value) < 0) return;
    if (parseInt(event.target.value) > stock.count) {
      setCount(stock.count.toString());
      setInfoMessage(
        "Max number of stocks to " + actionText + " is " + stock.count
      );
      return;
    }
    setCount(event.target.value);
  };

  const handleAgree = () => {
    if (actionText === "Buy") {
      console.log("here");
      if (parseInt(count) * stock.price > user.money) {
        setErrorMessage("You don't have enough money Go to wallet to add more");
        return;
      }

      if (parseInt(count) > stock.count) {
        setErrorMessage("No enough stocks to buy");
        return;
      }
    } else {
      if (parseInt(count) > stock.count) {
        setErrorMessage("No enough stocks to sell");
        return;
      }
    }
    setErrorMessage("");
    handleAction({ ...stock, count: parseInt(count) });
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
          {infoMessage && (
            <Box
              sx={{
                marginTop: "1rem",
              }}
            >
              <InfoAlert text={infoMessage} />
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
