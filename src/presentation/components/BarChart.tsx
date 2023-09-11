import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  aspectRatio: 4,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Your Performance",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Gain",
      data: [65, 0, 80, 81, 56, 55, 40, 10, 20, 30, 40, 50],
      backgroundColor: [] as string[], // Leave this empty for now
      borderColor: [] as string[], // Leave this empty for now
      borderWidth: 1,
      barThickness: 30,
      borderRadius: 15,
      minBarLength: 2,
    },
    {
      label: "Loss",
      data: [-6, -59, -40, 0, -10, 0, -40, -10, -20, -30, -40, -50],
      backgroundColor: [] as string[], // Leave this empty for now
      borderColor: [] as string[], // Leave this empty for now
      borderWidth: 1,
      barThickness: 30,
      borderRadius: 15,
      minBarLength: 2,
    },
  ],
};

// Responsive Bar Chart
const Container = styled("div")(() => ({
  width: "100%",
  maxWidth: "100%" /* Allow the container to expand */,
}));

export function BarChart() {
  const theme = useTheme();
  useEffect(() => {
    // Customize the background and border colors based on positive/negative values
    data.datasets[0].backgroundColor = data.datasets[0].data.map(
      () => `${theme.palette.primary.light}`
    );

    data.datasets[0].borderColor = data.datasets[0].data.map(
      () => `${theme.palette.primary.dark}`
    );
    data.datasets[1].backgroundColor = data.datasets[0].data.map(
      () => `${theme.palette.error.light}`
    );

    data.datasets[1].borderColor = data.datasets[0].data.map(
      () => `${theme.palette.error.dark}`
    );
  }, []);
  return (
    <Container>
      <Bar options={options} data={data} />
    </Container>
  );
}
