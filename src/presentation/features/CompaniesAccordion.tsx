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
  Paper,
  TableHead,
  Box,
} from "@mui/material";
import { BuyButton } from "../components/Button";
import styled from "@mui/material/styles/styled";

const ActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: theme.spacing(2),
}));
interface Props {
  companies: {
    name: string;
    stocks: number;
    price: number;
  }[];
  handleSelectCompany: (company: string) => void;
}
const CompaniesAccordion = ({ companies, handleSelectCompany }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
      handleSelectCompany(panel);
    };
  return (
    <div>
      {companies.map((company) => (
        <Accordion
          expanded={expanded === company.name}
          onChange={handleChange(company.name)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography>{company.name}</Typography>
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
                    <TableCell>{company.stocks}</TableCell>
                    <TableCell>{company.price}</TableCell>
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
