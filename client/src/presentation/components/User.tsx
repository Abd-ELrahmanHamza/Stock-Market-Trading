import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0.5rem 0.7rem",
  borderRadius: "2rem",
  boxShadow: "",
}));

const UserName = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.common.black,
}));

const UserAvatar = styled(AccountCircleIcon)(({ theme }) => ({
  borderRadius: "50%",
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
interface UserProps {
  source: string;
  userName: string;
}
const User = ({ source, userName }: UserProps) => {
  return (
    <UserContainer>
      <UserAvatar />
      <UserName variant="h6">{userName}</UserName>
    </UserContainer>
  );
};

export default User;
