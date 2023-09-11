import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  borderRadius: "1rem",
}));

interface CardProps {
  children: React.ReactNode;
}
const Card = ({ children }: CardProps) => {
  return <StyledCard elevation={5}>{children}</StyledCard>;
};

export default Card;
