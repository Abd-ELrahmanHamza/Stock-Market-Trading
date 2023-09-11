import Box from "@mui/material/Box";
import Sidebar from "../../layouts/Sidebar";
import { styled } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../features/Header";
const Container = styled(Box)({
  display: "flex",
});

const ContentContainer = styled(Box)(() => ({
  height: "100vh",
  width: "100%",
  overflow: "auto",
}));

export default function InvestorDashboard() {
  const [open, setOpen] = React.useState(true);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <Container>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Sidebar open={open} toggleDrawer={toggleDrawer} />
        <Box component="main" sx={{ width: "100%" }}>
          <Header />
          <ContentContainer>
            <Outlet></Outlet>
          </ContentContainer>
        </Box>
      </Box>
    </Container>
  );
}
