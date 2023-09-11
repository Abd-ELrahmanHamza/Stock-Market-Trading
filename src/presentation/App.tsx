import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvestorDashboard />,
    children: [
      {
        path: "",
        element: <div>dash</div>,
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
