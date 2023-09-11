import { Box, Paper, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import User from "../components/User";
import logo from "../assets/images/logo.svg";
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem",
  borderRadius: "0",
  [theme.breakpoints.down("md")]: {
    flexWrap: "wrap",
  },
}));

interface HeaderProps {
  title: string;
}
const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Typography variant="h4">{title}</Typography>
      <User source={logo} />
    </HeaderContainer>
  );
};

export default Header;
