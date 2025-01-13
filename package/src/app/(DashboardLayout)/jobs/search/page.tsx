"use client";

import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
} from "@mui/material";

export default function AdvancedJobFilter() {
  const [filter, setFilter] = useState({
    jobTitle: "",
    status: "",
    location: "",
    paymentStatus: "",
    customer: "",
    officer: "",
  });

  const [isSearch, setSearchVisibility] = useState(false);

  const handleFilterChange = (field: string, value: string) => {
    setFilter({ ...filter, [field]: value });
  };

  const handleSearch = () => {
    // Implement the filtering logic here or call an API
    console.log("Filter Criteria:", filter);
  };

  const handleClear = () => {
    setFilter({
      jobTitle: "",
      status: "",
      location: "",
      paymentStatus: "",
      customer: "",
      officer: "",
    });
  };

  return (
    <div style={{}}>
      <Button
        variant="contained"
        color="secondary"
        sx={{ alignSelf: "center" }}
        onClick={() => setSearchVisibility(!isSearch)}
      >
        Search
      </Button>
      <Box
        p={4}
        sx={{
          backgroundColor: "#fff",
          display: isSearch ? "block" : "none",

          borderRadius: 2,
          boxShadow: 2,
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Advanced Job Filter</h2>
        <Grid container spacing={3}>
          {/* Job Title */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Job Id"
              value={filter.jobTitle}
              onChange={(e) => handleFilterChange("jobTitle", e.target.value)}
              variant="outlined"
            />
          </Grid>

          {/* Status */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filter.status}
                onChange={(e) => handleFilterChange("status", e.target.value)}
                label="Status"
              >
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Queued">Queued</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Location */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Location"
              value={filter.location}
              onChange={(e) => handleFilterChange("location", e.target.value)}
              variant="outlined"
            />
          </Grid>

          {/* Payment Status */}
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Payment Status</InputLabel>
              <Select
                value={filter.paymentStatus}
                onChange={(e) =>
                  handleFilterChange("paymentStatus", e.target.value)
                }
                label="Payment Status"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Failed">Failed</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Customer */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Customer"
              value={filter.customer}
              onChange={(e) => handleFilterChange("customer", e.target.value)}
              variant="outlined"
            />
          </Grid>

          {/* Officer */}
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Officer"
              value={filter.officer}
              onChange={(e) => handleFilterChange("officer", e.target.value)}
              variant="outlined"
            />
          </Grid>

          {/* Action Buttons */}
          <Grid item xs={12}>
            <Box display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
