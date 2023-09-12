import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Investor from "./pages/Investor/Investor";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";
import InvestorStocks from "./pages/Investor/InvestorStocks";
import InvestorCompanies from "./pages/Investor/InvestorCompanies";

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
        element: <InvestorCompanies />,
      },
      {
        path: "stocks",
        element: <InvestorStocks />,
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
