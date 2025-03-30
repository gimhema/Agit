import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const initialRows = [
  { id: 1, name: "Alice", age: 25, department: "Engineering", salary: 75000 },
  { id: 2, name: "Bob", age: 30, department: "HR", salary: 60000 },
  { id: 3, name: "Charlie", age: 28, department: "Finance", salary: 68000 },
  { id: 4, name: "David", age: 35, department: "Engineering", salary: 82000 },
  { id: 5, name: "Emma", age: 29, department: "Marketing", salary: 72000 },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 150, editable: true },
  { field: "age", headerName: "Age", width: 100, type: "number", editable: true },
  { field: "department", headerName: "Department", width: 150, editable: true },
  { field: "salary", headerName: "Salary ($)", width: 150, type: "number", editable: true },
];

const Charts = () => {
  const [rows, setRows] = useState(initialRows);

  return (
    <Box sx={{ height: 400, width: "100%", padding: 3 }}>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Employee Data
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          "& .MuiDataGrid-cell": { fontSize: 14 },
          "& .MuiDataGrid-columnHeaders": { backgroundColor: "#f0f0f0", fontWeight: "bold" },
        }}
      />
    </Box>
  );
};

export default Charts;
