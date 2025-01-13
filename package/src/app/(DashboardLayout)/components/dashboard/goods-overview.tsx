import React, { useState } from "react";
import Chart from "react-apexcharts";

const GoodsStatusOverview = () => {
  const [chartData] = useState({
    series: [75, 25], // Example data: Received, Rejected
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Received", "Rejected"], // Updated labels
      colors: ["#28a745", "#dc3545"], // Green for received, red for rejected
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
    <div>
      <h3>Goods Status Overview</h3>
      <Chart
        // @ts-ignore

        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="380"
      />
    </div>
  );
};

export default GoodsStatusOverview;
