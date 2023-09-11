import { Box } from "@mui/material";
import { styled } from "@mui/system";
import User from "../components/User";
import logo from "../assets/images/logo.svg";
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));
const Header = () => {
  return (
    <HeaderContainer>
      <User source={logo} />
    </HeaderContainer>
  );
};

export default Header;
