import "./sass/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InvestorDashboard from "./pages/Investor/InvestorDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InvestorDashboard />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
