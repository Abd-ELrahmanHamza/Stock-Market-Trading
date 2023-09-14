import { Box, Typography } from "@mui/material";
import { Card } from "../../components/Card";
import { useAppDispatch, useAppSelector } from "../../../application/hooks";
import { useEffect } from "react";
import { fetchStatistics } from "../../../application/slice/statisticsSlice";
import styled from "@mui/material/styles/styled";
import CenterBox from "../../components/CenterBox";
import LineChart from "../../components/LineChart";
const StyledTitle = styled(Typography)(({ theme }) => ({
  marginBottom: "1rem",
  color: theme.palette.primary.main,
}));

const ChartContainer = styled(Box)(({ theme }) => ({
  marginBottom: "1rem",
  marginTop: "1rem",
}));

const AdminStatistics = () => {
  const statistics = useAppSelector((state) => state.statistics);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  console.log(statistics);
  return (
    <Box>
      <Card>
        <StyledTitle variant="h3">Statistics</StyledTitle>
      </Card>
      {statistics &&
        Object.keys(statistics.statistics).map((key) => (
          <ChartContainer key={key}>
            <CenterBox>
              <Card
                props={{
                  sx: {
                    width: "100%",
                  },
                }}
              >
                <StyledTitle variant="h4" color="primary">
                  {key}
                </StyledTitle>
                <LineChart dataSet={[{ name: "Jan", value: 1 }]} />
              </Card>
            </CenterBox>
          </ChartContainer>
        ))}
    </Box>
  );
};

export default AdminStatistics;
