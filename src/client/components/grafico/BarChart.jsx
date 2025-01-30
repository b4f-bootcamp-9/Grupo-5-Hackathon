import React from 'react';
import { Bar } from 'react-chartjs-2';
import { chartData } from '../grafico/chartData';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  return <Bar data={chartData} />;
};

export default BarChart;
