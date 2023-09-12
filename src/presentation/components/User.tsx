import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0.5rem 0.7rem",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "1rem",
  cursor: "pointer",
  boxShadow: "",
}));

const UserName = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.common.white,
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
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
      <UserAvatar alt="Profile Picture" src={source} />
      <UserName variant="h6">{userName}</UserName>
    </UserContainer>
  );
};

export default User;
