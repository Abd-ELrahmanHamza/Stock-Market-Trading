import { Box } from "@mui/material";
import styled from "@mui/material/styles/styled";
import User from "../components/User";
import logo from "../assets/images/logo.svg";
const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0.7, 1),
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[1],
}));
const Header = () => {
  return (
    <HeaderContainer>
      <User source={logo} />
    </HeaderContainer>
  );
};

export default Header;
