import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Box,
} from "@mui/material";
import { BuyButton } from "../components/Button";
import styled from "@mui/material/styles/styled";
import { CustomTablePagination } from "../components/CustomTablePagination";
import Stock from "../../domain/entities/stock";

const ActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
}));

interface Props {
  stocks: Stock[];
  handleSelectCompany: (company: string) => void;
}
const CompaniesAccordion = ({ stocks, handleSelectCompany }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      handleSelectCompany(panel);
    };

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
    <div>
      <CustomTablePagination
        rowsPerPageOptions={[4, 10, 25]}
        count={stocks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="No."
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
      />
      {stocks
        .slice(
          page * rowsPerPage,
          Math.min(page * rowsPerPage + rowsPerPage, stocks.length)
        )
        .map((stock) => (
          <Accordion
            expanded={expanded === stock.name}
            onChange={handleChange(stock.name)}
            key={stock.name}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography>{stock.name}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Stocks</TableCell>
                      <TableCell>price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{stock.count}</TableCell>
                      <TableCell>{stock.price}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <ActionContainer>
                  <BuyButton props={{}}>Buy</BuyButton>
                </ActionContainer>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default CompaniesAccordion;
