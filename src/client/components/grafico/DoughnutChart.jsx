import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { chartData } from '../grafico/chartData';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  return <Doughnut data={chartData} />;
};

export default DoughnutChart;
