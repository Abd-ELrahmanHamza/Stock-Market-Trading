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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   "&:nth-of-type(odd)": {
//     backgroundColor: theme.palette.action.hover,
//   },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: number
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData("Frozen yoghurt", "Buy", 6.0, 24),
  createData("Ice cream sandwich", "Buy", 9.0, 37),
  createData("Eclair", "Buy", 16.0, 24),
  createData("Cupcake", "Buy", 3.7, 67),
  createData("Gingerbread", "Buy", 16.0, 49),
];

export default function Transactions() {
  return (
    <Box>
      <Typography variant="h5" sx={{ padding: "1rem" }}>
        Transactions
      </Typography>
      <TableContainer
        sx={{
          maxHeight: "45vh",
          boxShadow: "none",
        }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell align="right">Type</StyledTableCell>
              <StyledTableCell align="right">Stocks</StyledTableCell>
              <StyledTableCell align="right">Money</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
