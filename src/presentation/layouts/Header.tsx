import { Box, Typography } from "@mui/material";
import styled from "@mui/material/styles/styled";
import User from "../components/User";
import logo from "../assets/images/logo.svg";
import { getUserUtil } from "../../application/utils/user";
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
  const user = getUserUtil();
  return (
    <HeaderContainer>
      <Typography variant="h4">{title}</Typography>
      <User source={logo} userName={user.name} />
    </HeaderContainer>
  );
};

export default Header;
