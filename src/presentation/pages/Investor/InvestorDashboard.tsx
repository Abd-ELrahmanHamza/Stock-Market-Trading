import { Box } from "@mui/material";
import Card from "../../components/Card";
import { BarChart } from "../../components/BarChart";

const InvestorDashboard = () => {
  return (
    <Box>
      <Card>
        <BarChart />
      </Card>
    </Box>
  );
};

export default InvestorDashboard;
