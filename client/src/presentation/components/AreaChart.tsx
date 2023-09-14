import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart as AreaChartJS,
  Area,
} from "recharts";
import { useTheme } from "@mui/material";
const AreaChart = ({
  dataSet,
}: {
  dataSet: { name: string; value: number }[];
}) => {
  const theme = useTheme();
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChartJS
        width={730}
        height={250}
        data={dataSet}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor={theme.palette.primary.main}
              stopOpacity={0}
            />
          </linearGradient>
          {/* <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient> */}
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={theme.palette.primary.main}
          fillOpacity={1}
          fill={`url(#colorUv)`}
        />
        {/* <Area
          type="monotone"
          dataKey="value"
          stroke={theme.palette.primary.main}
          fillOpacity={1}
          fill={`url(#colorPv)`}
        /> */}
      </AreaChartJS>
    </ResponsiveContainer>
  );
};

export default React.memo(AreaChart);
