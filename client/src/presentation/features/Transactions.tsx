import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";
import { CustomTablePagination } from "../components/CustomTablePagination";
import { Transaction } from "../../domain/entities/transactions";

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

export default function Transactions({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <Box>
      <Typography variant="h5" sx={{ padding: "1rem" }}>
        Transactions
      </Typography>
      <TableContainer
        sx={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        component={Paper}
      >
        <CustomTablePagination
          rowsPerPageOptions={[4, 10, 25]}
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="No."
          labelDisplayedRows={({ from, to, count }) =>
            `${from}-${to} of ${count}`
          }
        />

        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions
              .slice(
                page * rowsPerPage,
                Math.min(page * rowsPerPage + rowsPerPage, transactions.length)
              )
              .map((row) => (
                <StyledTableRow
                  key={row.company + row.date + row.price + row.type}
                >
                  <StyledTableCell component="th" scope="row">
                    {row.company}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.type}</StyledTableCell>
                  <StyledTableCell align="right">{row.date}</StyledTableCell>
                  <StyledTableCell align="right">{row.amount}</StyledTableCell>
                  <StyledTableCell align="right">{row.price}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
