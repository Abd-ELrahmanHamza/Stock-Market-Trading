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
import {
  TablePagination,
  tablePaginationClasses as classes,
} from "@mui/base/TablePagination";
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

const CustomTablePagination = styled(TablePagination)(
  ({ theme }) => `
  & .${classes.spacer} {
    display: none;
  }

  & .${classes.toolbar}  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.select}{
    padding: 2px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
    };
    border-radius: 50px;
    background-color: transparent;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[800]
          : theme.palette.grey[50]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.light
      };
    }
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.actions} {
    padding: 2px;
    border: 1px solid ${
      theme.palette.mode === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
    };
    border-radius: 50px;
    text-align: center;
  }

  & .${classes.actions} > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;

    &:hover {
      background-color: ${
        theme.palette.mode === "dark"
          ? theme.palette.grey[800]
          : theme.palette.grey[50]
      };
    }

    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark"
          ? theme.palette.primary.main
          : theme.palette.primary.light
      };
    }
  }
  `
);

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
  createData("AAAA", "Buy", 16.0, 49),
  createData("BBBB", "Buy", 16.0, 49),
];

export default function Stocks({
  ActionComponent,
}: {
  ActionComponent: React.ReactElement;
}) {
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

  return (
    <Card>
      <CustomTablePagination
        rowsPerPageOptions={[4, 10, 25]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
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
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(
                page * rowsPerPage,
                Math.min(page * rowsPerPage + rowsPerPage, rows.length)
              )
              .map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.calories}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.fat}</StyledTableCell>
                  <StyledTableCell align="right">
                    {ActionComponent}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
