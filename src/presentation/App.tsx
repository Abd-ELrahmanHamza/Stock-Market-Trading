import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Investor from "./pages/Investor/Investor";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";
import InvestorStocks from "./pages/Investor/InvestorStocks";
import InvestorCompanies from "./pages/Investor/InvestorCompanies";
import InvestorWallet from "./pages/Investor/InvestorWallet";
import { store } from "../application/store";
import { Provider } from "react-redux";
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
        element: <InvestorWallet />,
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
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
