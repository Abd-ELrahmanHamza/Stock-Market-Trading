import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card } from "../components/Card";
import { CustomTablePagination } from "../components/CustomTablePagination";
import Stock from "../../domain/entities/stock";
import BuyStocksDialog from "./BuyStocksDialog";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
interface Props {
  ActionComponent: React.JSXElementConstructor<any>;
  stocks: Stock[];
  handleAction: (stock: Stock) => void;
  actionText: string;
}
export default function Stocks({
  ActionComponent,
  stocks,
  handleAction,
  actionText,
}: Props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [selectedStock, setSelectedStock] = React.useState<Stock>(stocks[0]);
  const handleDialogOpen = (_: React.SyntheticEvent, stock: Stock) => {
    setOpenDialog(true);
    setSelectedStock(stock);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Card
      props={{
        sx: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <BuyStocksDialog
        open={openDialog}
        handleClose={handleDialogClose}
        handleAction={handleAction}
        actionText={actionText}
        stock={selectedStock}
      />
      <CustomTablePagination
        rowsPerPageOptions={[4, 10, 25]}
        count={stocks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Stocks per page"
      />
      <TableContainer
        sx={{
          boxShadow: "none",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="right">Count</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              {ActionComponent && (
                <StyledTableCell align="right">Action</StyledTableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {stocks
              .slice(
                page * rowsPerPage,
                Math.min(page * rowsPerPage + rowsPerPage, stocks.length)
              )
              .map((stock) => (
                <StyledTableRow key={stock.name}>
                  <StyledTableCell component="th" scope="row">
                    {stock.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{stock.count}</StyledTableCell>
                  <StyledTableCell align="right">{stock.price}</StyledTableCell>
                  {ActionComponent && (
                    <StyledTableCell align="right">
                      <ActionComponent
                        props={{
                          onClick: (e: React.SyntheticEvent) =>
                            handleDialogOpen(e, stock),
                        }}
                      >
                        {actionText}
                      </ActionComponent>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
