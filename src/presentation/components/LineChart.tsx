import React from "react";
import {
  LineChart as LineChartJS,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "@mui/material";
const LineChart = ({
  dataSet,
}: {
  dataSet: { name: string; value: number }[];
}) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChartJS
        data={dataSet}
        margin={{
          top: 5,
          right: 30,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke={theme.palette.primary.main}
          activeDot={{ r: 8 }}
        />
      </LineChartJS>
    </ResponsiveContainer>
  );
};

export default React.memo(LineChart);
