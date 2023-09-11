import { styled } from "@mui/material";
import { Link as ReactRouterDomLink } from "react-router-dom";
import { NavLink as ReactRouterDomNavLink } from "react-router-dom";

interface NavLinkProps {
  dest: string;
  children: React.ReactNode;
}

const StyledLink = styled(ReactRouterDomLink)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.common.black,
  },
}));
const StyledNavLink = styled(ReactRouterDomNavLink)(({ theme }) => ({
  color: theme.palette.common.black,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
    color: theme.palette.common.black,
  },

  "&.active": {
    color: theme.palette.primary.main,
    "& .MuiListItem-root": {
      borderRight: `0.2rem solid ${theme.palette.primary.main}`,
    },
  },
}));

const Link = ({ dest, children }: NavLinkProps) => {
  return <StyledLink to={dest}>{children}</StyledLink>;
};

const NavLink = ({ dest, children }: NavLinkProps) => {
  return <StyledNavLink to={dest}>{children}</StyledNavLink>;
};
export { Link, NavLink };
