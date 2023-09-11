import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/material/styles/styled";

const UserContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "0.5rem",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const UserName = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  fontWeight: "bold",
}));

const UserAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[2],
}));
interface UserProps {
  source: string;
}
const User = ({ source }: UserProps) => {
  return (
    <UserContainer>
      <UserAvatar alt="Profile Picture" src={source} />
      <UserName variant="h6">
        Abdelrahman
      </UserName>
    </UserContainer>
  );
};

export default User;
