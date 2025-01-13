import { Card } from "@mui/material";
import React, { useState } from "react";
import Chart from "react-apexcharts";

const JobStatusOverview = () => {
  const [chartData] = useState({
    series: [55, 35, 10], // Example data: Completed, In Progress, Queued
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Completed", "In Progress", "Queued"],
      colors: ["#28a745", "#007bff", "#ffc107"], // Green, Blue, Yellow
      legend: {
        position: "top",
        horizontalAlign: "center",
      },
      dataLabels: {
        enabled: true,
        // @ts-ignore
        formatter: (val) => `${val.toFixed(1)}%`, // Format as percentage
      },
    },
  });

  return (
    <Card>
      <h3>Job Status Overview</h3>
      <Chart
        // @ts-ignore

        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </Card>
  );
};

export default JobStatusOverview;
