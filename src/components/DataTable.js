import React from "react";

const DataTable = ({ onSelect, selectedRows }) => {
  // Mock data
  const data = [
    { id: 1, name: "Rajesh", value: 10 },
    { id: 2, name: "Ramesh", value: 15 },
    { id: 3, name: "Deepesh", value: 20 },
    { id: 4, name: "Suresh", value: 25 },
    { id: 5, name: "Mahesh", value: 30 },
    { id: 6, name: "Gyanesh", value: 35 },
    { id: 7, name: "Ganesh", value: 40 },
    { id: 8, name: "Rakesh", value: 45 },
    { id: 9, name: "Somesh", value: 50 },
    { id: 10, name: "Chandresh", value: 55 },
  ];

  return (
    <table
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "snow",
      }}
    >
      <thead>
        <tr>
          <th></th>
          <th>ID</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedRows.includes(row.id)}
                onChange={(e) => onSelect(row.id, e.target.checked)}
              />
            </td>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
