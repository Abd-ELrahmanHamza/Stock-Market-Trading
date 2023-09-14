import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2),
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  height: "100%",
}));

const StyledNoPadCard = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "1rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  overflow: "hidden",
}));

interface CardProps {
  children: React.ReactNode;
  props?: any;
}
const Card = ({ children, props }: CardProps) => {
  return (
    <StyledCard {...props} elevation={7}>
      {children}
    </StyledCard>
  );
};

const NoPadCard = ({ children }: CardProps) => {
  return <StyledNoPadCard elevation={7}>{children}</StyledNoPadCard>;
};
export { Card, NoPadCard };
