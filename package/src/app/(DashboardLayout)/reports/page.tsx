"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { LocalizationProvider, DateRangePicker } from "@mui/x-date-pickers-pro";
import { CSVLink } from "react-csv";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";

interface ReportData {
  jobsProcessed: number;
  jobsRejected: number;
  avgQueueTime: string;
  processingTime: string;
  userPerformance: string;
}

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);

  const [reportData, setReportData] = useState<ReportData>({
    jobsProcessed: 125,
    jobsRejected: 15,
    avgQueueTime: "3h 20m",
    processingTime: "2 days for 100 jobs",
    userPerformance: "85% efficiency on assigned jobs",
  });

  const handleFilter = () => {
    // Simulate fetching filtered data
    console.log("Date Range Filtered:", dateRange);
  };

  const csvData = [
    ["Metric", "Value"],
    ["Jobs Processed", reportData.jobsProcessed],
    ["Jobs Rejected", reportData.jobsRejected],
    ["Average Queue Time", reportData.avgQueueTime],
    ["Processing Time", reportData.processingTime],
    ["User Performance", reportData.userPerformance],
  ];

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Report Page
      </Typography>

      {/* Calendar Range Filter */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Filter by Date Range
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/*  @ts-ignore */}
            <DateRangePicker
              //    @ts-ignore

              startText="Start Date"
              endText="End Date"
              value={dateRange}
              onChange={(newValue) => setDateRange(newValue)}
              //    @ts-ignore

              renderInput={(startProps, endProps) => (
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth {...startProps} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField fullWidth {...endProps} />
                  </Grid>
                </Grid>
              )}
            />
          </LocalizationProvider>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleFilter}
          >
            Apply Filter
          </Button>
        </CardContent>
      </Card>

      {/* Metrics Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Jobs Processed</Typography>
              <Typography variant="h4">{reportData.jobsProcessed}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Jobs Rejected</Typography>
              <Typography variant="h4">{reportData.jobsRejected}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Average Queue Time</Typography>
              <Typography variant="h4">{reportData.avgQueueTime}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Processing Time</Typography>
              <Typography variant="h4">{reportData.processingTime}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">User Performance</Typography>
              <Typography variant="h4">{reportData.userPerformance}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Export to CSV */}
      <Box mt={4}>
        <Button variant="contained" color="secondary">
          <CSVLink
            data={csvData}
            filename={"report.csv"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Export to CSV
          </CSVLink>
        </Button>
      </Box>
    </Box>
  );
}
