import { createBrowserRouter } from "react-router-dom";
import Investor from "../pages/Investor/Investor";
import InvestorDashboard from "../pages/Investor/InvestorDashboard";
import InvestorCompanies from "../pages/Investor/InvestorCompanies";
import InvestorStocks from "../pages/Investor/InvestorStocks";
import InvestorWallet from "../pages/Investor/InvestorWallet";
import SignInSide from "../pages/Common/Login";
import Admin from "../pages/Admin/Admin";
import AdminTransactions from "../pages/Admin/AdminTransactions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInSide />,
  },
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
    path: "/admin/",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <div>Statistics</div>,
      },
      {
        path: "transactions",
        element: <AdminTransactions />,
      },
      {
        path: "companies",
        element: <div>Companies</div>,
      },
    ],
  },
]);

export default router;
