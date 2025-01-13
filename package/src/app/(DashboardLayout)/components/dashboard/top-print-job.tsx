import React, { useState } from "react";
import Chart from "react-apexcharts";

const TopPrintJobsChart = () => {
  const [chartData] = useState({
    series: [350, 300, 250, 200, 180, 160], // Example paper usage counts
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Job 1", "Job 2", "Job 3", "Job 4", "Job 5", "Job 6"], // Top 10 job names or IDs
      colors: ["#FF6347", "#FFD700", "#4CAF50", "#FF69B4", "#FF4500"], // Unique colors for each job
      legend: {
        position: "bottom",
        horizontalAlign: "center",
      },
      dataLabels: {
        enabled: true,
        // @ts-ignore

        formatter: (val, opts) => {
          return `${opts.w.globals.labels[opts.seriesIndex]}: ${val.toFixed(
            1
          )}%`;
        },
      },
    },
  });

  return (
    <div>
      <h3>Top 5 Print Jobs by Paper Usage</h3>
      <Chart
        // @ts-ignore

        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="400"
      />
    </div>
  );
};

export default TopPrintJobsChart;
