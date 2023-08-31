import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard04() {

  const chartData = {
    labels: [
      '07-27-2023', '07-28-2023', '07-29-2023',
      '07-30-2023', '07-31-2023', '08-01-2023',
    ],
    datasets: [
      // Light blue bars
      {
        label: 'Pending',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.red[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Approved',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.green[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Aprroved VS Pending</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard04;
