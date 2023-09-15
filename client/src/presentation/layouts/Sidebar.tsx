import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "../components/Link";
import { Constants } from "../theme/theme";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const openedMixin = (theme: Theme): CSSObject => ({
  width: Constants.drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  border: "none",
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: Constants.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiList-root": {},
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Logo = styled("img")(({ theme }) => ({
  width: "50%",
  height: "100%",
  margin: "auto",
  padding: theme.spacing(0, 1),
}));

const LogoutList = styled(List)(() => ({
  marginTop: "auto",
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  "& .MuiTypography-root": {
    fontSize: "1.3rem",
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({}));

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
  navigationList: {
    text: string;
    icon: React.ReactNode;
    link: string;
  }[];
}
const Sidebar = ({ open, toggleDrawer, navigationList }: SidebarProps) => {
  const navigate = useNavigate();
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && <Logo alt="Logo" src={logo} />}
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      <List>
        {navigationList.map(({ text, icon, link }) => (
          <NavLink key={text} dest={link}>
            <ListItem disablePadding>
              <StyledListItemButton>
                <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
                <StyledListItemText primary={text} />
              </StyledListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <LogoutList>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <StyledListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </LogoutList>
    </Drawer>
  );
};

export default Sidebar;
