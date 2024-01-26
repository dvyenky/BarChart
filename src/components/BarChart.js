import React from "react";
import Plot from "react-plotly.js";

const BarChart = ({ selectedRows }) => {
  // Mock data
  const data = [
    { id: 1, value: 10 },
    { id: 2, value: 15 },
    { id: 3, value: 20 },
    { id: 4, value: 25 },
    { id: 5, value: 30 },
    { id: 6, value: 35 },
    { id: 7, value: 40 },
    { id: 8, value: 45 },
    { id: 9, value: 50 },
    { id: 10, value: 55 },
  ];

  // Filter data based on selected rows
  const filteredData = data.filter((row) => selectedRows.includes(row.id));

  // Extract values for the bar chart
  const barChartData = {
    x: filteredData.map((row) => `ID: ${row.id}`),
    y: filteredData.map((row) => row.value),
    type: "bar",
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <Plot
        data={[barChartData]}
        layout={{ width: 600, height: 400, title: "Bar Chart" }}
      />
    </div>
  );
};

export default BarChart;
