import React from "react";
import { Radar } from "react-chartjs-2";
import { chartData } from "../grafico/chartData";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

const RadarChart = () => {
  return <Radar data={chartData} />;
};

export default RadarChart;
