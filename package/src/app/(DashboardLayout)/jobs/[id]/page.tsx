"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Grid, Paper } from "@mui/material";

export default function JobDetails() {
  const params = useParams();
  const jobId = params.id;

  // TODO: Fetch job details from API

  const [job, setJob] = React.useState({
    id: jobId,
    title: "Sample Job",
    status: "In Progress",
    location: "Printing",
    paymentStatus: "Pending",
    customer: "Sample Customer",
    description: "This is a sample job description.",
    createdAt: "2023-06-01",
    updatedAt: "2023-06-05",
    officer: "Brian Mukuka",
  });

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Job Details
      </Typography>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          {job.title}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Status</Typography>
            <Typography fontWeight="medium">{job.status}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Location</Typography>
            <Typography fontWeight="medium">{job.location}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Payment Status</Typography>
            <Typography fontWeight="medium">{job.paymentStatus}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Customer</Typography>
            <Typography fontWeight="medium">{job.customer}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Created At</Typography>
            <Typography fontWeight="medium">{job.createdAt}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Last Updated</Typography>
            <Typography fontWeight="medium">{job.updatedAt}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography color="textSecondary">Assigned to</Typography>
            <Typography fontWeight="medium">{job.officer}</Typography>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography color="textSecondary">Description</Typography>
          <Typography mt={1}>{job.description}</Typography>
        </Box>
      </Paper>
    </>
  );
}
