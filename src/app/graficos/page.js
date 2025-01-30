"use client";
import React from 'react';
import BarChart from '../../client/components/grafico/BarChart';
import PieChart from '../../client/components/grafico/PieChart';
import DoughnutChart from '../../client/components/grafico/DoughnutChart';
import RadarChart from '../../client/components/grafico/RadarChart';
import LineChart from '../../client/components/grafico/LineChart';
import styles from '../../client/styles/grafico.module.css';

export default function Page() {
  return (
    <div className={styles.App}>
      <h1 className={styles.header}>Crescimento de Clientes</h1>
      <div className={styles.chartContainer}>
        <div className={styles.chart}>
          <h2>Gráfico de Clientes</h2>
          <BarChart />
        </div>
        <div className={styles.chart}>
          <h2>Gráfico de Lucro</h2>
          <LineChart />
        </div>
        <div className={styles.chart}>
          <h2>Gráfico de Rosca</h2>
          <DoughnutChart />
        </div>
        <div className={styles.chart}>
          <h2>Radar</h2>
          <RadarChart />
        </div>
        <div className={styles.chart} style={{ gridColumn: 'span 2' }}>
          <h2>Gráfico de Pizza</h2>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
