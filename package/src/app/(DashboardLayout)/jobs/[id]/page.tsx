"use client";

import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Button,
  Modal,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useParams } from "next/navigation";

export default function JobDetails() {
  const params = useParams();
  const jobId = params.id;

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

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newStatus, setNewStatus] = React.useState(job.status);
  const [newOfficer, setNewOfficer] = React.useState(job.officer);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleChangeJobDetails = () => {
    setJob({
      ...job,
      status: newStatus,
      officer: newOfficer,
      updatedAt: new Date().toISOString().split("T")[0], // Current date
    });
    handleCloseModal();
  };

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
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleOpenModal}>
            Change Status / Reassign Job
          </Button>
        </Box>
      </Paper>

      {/* Modal for Changing Job Details */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: 400,
          }}
        >
          <Typography variant="h6" mb={2}>
            Update Job Details
          </Typography>
          <Grid container spacing={2}>
            {/* Status Selector */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Status</InputLabel>
                <Select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  label="Status"
                >
                  <MenuItem value="In Progress">In Progress</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                  <MenuItem value="Queued">Queued</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Officer Input */}
            <Grid item xs={12}>
              <TextField
                label="Assign to Officer"
                fullWidth
                value={newOfficer}
                onChange={(e) => setNewOfficer(e.target.value)}
              />
            </Grid>

            {/* Action Buttons */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleChangeJobDetails}
                >
                  Save Changes
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
