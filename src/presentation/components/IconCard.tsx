import { Box, Typography, Avatar, Grid } from "@mui/material";
import styled from "@mui/material/styles/styled";

const StyledBox = styled(Grid)<{ isGradient?: boolean }>(
  ({ theme, isGradient }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: theme.spacing(3),
    maxHeight: "10rem",
    flexWrap: "wrap",
    backgroundImage: isGradient
      ? `linear-gradient(45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`
      : "none",
    color: isGradient ? theme.palette.common.white : theme.palette.common.black,
  })
);

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
}));

const BoxItem = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  flexDirection: "column",
  padding: theme.spacing(2),
}));

interface IconCardProps {
  Icon: string;
  text: string;
  sub: string;
}
const IconCard = ({ Icon, text, sub }: IconCardProps) => {
  return (
    <StyledBox>
      <StyledAvatar variant="rounded" alt="Wallet" src={Icon} />
      <BoxItem>
        <Typography>{sub}</Typography>
        <Typography variant="h3">{text}</Typography>
      </BoxItem>
    </StyledBox>
  );
};

const IconGradientCard = ({ Icon, text, sub }: IconCardProps) => {
  return (
    <StyledBox isGradient>
      <StyledAvatar variant="rounded" alt="Wallet" src={Icon} />
      <BoxItem>
        <Typography>{sub}</Typography>
        <Typography variant="h3">{text}</Typography>
      </BoxItem>
    </StyledBox>
  );
};

export { IconCard, IconGradientCard };
