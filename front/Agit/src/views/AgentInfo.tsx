import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Divider,
  Grid,
} from "@mui/material";

const data = [
  {
    id: 1,
    name: "John",
    val1: 1,
    val2: 11,
    val3: 22,
    val4: 33,
    val5: 44,
  },
];

const AgentInfo = () => {
  const [selectedAgent, setSelectedAgent] = useState(data[0]);

  return (
    <Box sx={{ padding: 4 }}>
      {/* 접속자 목록 테이블 */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        접속자 목록
      </Typography>
      <TableContainer component={Paper} sx={{ mb: 4 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell>접속자 ID</TableCell>
              <TableCell>접속자 명</TableCell>
              <TableCell>VAL1</TableCell>
              <TableCell>VAL2</TableCell>
              <TableCell>VAL3</TableCell>
              <TableCell>VAL4</TableCell>
              <TableCell>VAL5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
                <TableRow
                key={row.id}
                hover
                sx={{ cursor: "pointer" }}
                onClick={() => setSelectedAgent(row)}
                >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.val1}</TableCell>
                <TableCell>{row.val2}</TableCell>
                <TableCell>{row.val3}</TableCell>
                <TableCell>{row.val4}</TableCell>
                <TableCell>{row.val5}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>

      {/* 선택한 항목 정보 */}
      <Typography variant="h6" fontWeight="bold" mb={2}>
        선택한 항목
      </Typography>
      <Paper sx={{ padding: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>접속자 ID:</strong> {selectedAgent.id}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>접속자 명:</strong> {selectedAgent.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>VAL1:</strong> {selectedAgent.val1}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>VAL2:</strong> {selectedAgent.val2}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>VAL3:</strong> {selectedAgent.val3}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>VAL4:</strong> {selectedAgent.val4}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>
              <strong>VAL5:</strong> {selectedAgent.val5}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default AgentInfo;
