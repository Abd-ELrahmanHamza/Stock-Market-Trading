import { createBrowserRouter } from "react-router-dom";
import Investor from "../pages/Investor/Investor";
import InvestorDashboard from "../pages/Investor/InvestorDashboard";
import InvestorCompanies from "../pages/Investor/InvestorCompanies";
import InvestorStocks from "../pages/Investor/InvestorStocks";
import InvestorWallet from "../pages/Investor/InvestorWallet";
import SignInSide from "../pages/Common/Login";

const router = createBrowserRouter([
  {
    path: "/investor/",
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
  {
    path: "/",
    element: <SignInSide />,
  },
]);

export default router;
