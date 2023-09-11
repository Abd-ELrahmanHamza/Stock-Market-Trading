import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Investor from "./pages/Investor/Investor";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Investor />,
    children: [
      {
        path: "",
        element: <InvestorDashboard />,
      },
      {
        path: "wallet",
        element: <div>wallet</div>,
      },
      {
        path: "companies",
        element: <div>companies</div>,
      },
      {
        path: "stocks",
        element: <div>stocks</div>,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
