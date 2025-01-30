import React from "react";
import { Pie } from "react-chartjs-2";
import { chartData } from "../grafico/chartData";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  return <Pie data={chartData} />;
};

export default PieChart;
