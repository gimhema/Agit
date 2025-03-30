import React, { useEffect, useState } from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const generateRandomData = () => {
  const now = new Date();
  return {
    time: now.toLocaleTimeString([], { minute: "2-digit", second: "2-digit" }),
    cpu: Math.random() * 100,
    memory: Math.random() * 100,
    network: Math.random() * 1000,
  };
};

const Monitoring = () => {
  const [data, setData] = useState(() => Array.from({ length: 10 }, generateRandomData));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => [...prevData.slice(1), generateRandomData()]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ padding: 3, backgroundColor: "#f5f5f5", height: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        System Monitoring
      </Typography>

      <Grid container spacing={3}>
        {/* CPU Usage */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" mb={1}>CPU Usage</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis domain={[0, 100]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="cpu" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Memory Usage */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" mb={1}>Memory Usage</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis domain={[0, 100]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="memory" stroke="#82ca9d" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Network Traffic */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 2 }}>
            <Typography variant="h6" mb={1}>Network Traffic</Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <XAxis dataKey="time" />
                <YAxis domain={[0, 1000]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Line type="monotone" dataKey="network" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Monitoring;
