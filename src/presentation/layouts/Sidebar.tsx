import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { NavLink } from "../components/Link";
import { Constants } from "../theme";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/images/logo.svg";

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
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: Constants.drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiList-root": {
  },
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

const NavListLink = styled(NavLink)(({ theme }) => ({
  backgroundColor: theme.palette.common.black,
  "&.active": {
    borderRight: `4px solid ${theme.palette.primary.light}`,
  },
}));

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
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        {open && <Logo alt="Logo" src={logo} />}
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navigationList.map(({ text, icon, link }) => (
          <NavListLink key={text} dest={link}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "inherit" }}>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavListLink>
        ))}
      </List>
      <Divider />
      <LogoutList>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </LogoutList>
    </Drawer>
  );
};

export default Sidebar;