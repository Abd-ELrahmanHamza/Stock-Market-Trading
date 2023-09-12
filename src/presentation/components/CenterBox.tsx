import styled from "@mui/material/styles/styled";
import { Box } from "@mui/material";
const StyledCenterBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
    height: "100%",
}));

interface Props {
  children: React.ReactNode;
}

const CenterBox = ({ children }: Props) => {
  return <StyledCenterBox>{children}</StyledCenterBox>;
};

export default CenterBox;
