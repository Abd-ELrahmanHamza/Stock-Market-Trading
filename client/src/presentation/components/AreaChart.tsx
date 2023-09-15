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
import { Box, styled, useTheme } from "@mui/material";
import { CustomTablePagination } from "./CustomTablePagination";
const ChartContainer = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  marginTop: "1rem",
  width: "100%",
  minHeight: "40vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
const AreaChart = ({
  dataSet,
}: {
  dataSet: { name: string; value: number }[];
}) => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(4);
  const handleChangePage = (
    _: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <ChartContainer>
      <CustomTablePagination
        rowsPerPageOptions={[4, 10, 25, dataSet.length]}
        count={dataSet.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="No."
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} of ${count}`
        }
      />
      <ResponsiveContainer width="100%" height="100%" minHeight={"40vh"}>
        <AreaChartJS
          width={730}
          height={250}
          data={dataSet.slice(
            page * rowsPerPage,
            Math.min(page * rowsPerPage + rowsPerPage, dataSet.length)
          )}
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
        </AreaChartJS>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default React.memo(AreaChart);
