// App.js

import React, { useState } from "react";
import DataTable from "./components/DataTable";
import BarChart from "./components/BarChart";
import "./App.css";

function App() {
  const [selectedRows, setSelectedRows] = useState([]);

  // Function to handle row selection
  const handleRowSelect = (rowId, isChecked) => {
    if (isChecked) {
      setSelectedRows([...selectedRows, rowId]);
    } else {
      setSelectedRows(selectedRows.filter((id) => id !== rowId));
    }
  };

  return (
    <div className="App">
      <h1><u>Data Table and Bar Chart Visualization</u></h1>
      <DataTable onSelect={handleRowSelect} selectedRows={selectedRows} />
      <BarChart selectedRows={selectedRows} />
    </div>
  );
}

export default App;
