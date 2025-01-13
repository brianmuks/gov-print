"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Chip,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import Link from "next/link";
import AdvancedJobFilter from "./search/page";
import { uniqueId } from "lodash";

export default function Works() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Annual Budget Report",
      status: "In Progress",
      location: "Prepress",
      paymentStatus: "Paid",
      customer: "Ministry of Finance",
    },
    {
      id: 2,
      title: "Election Ballots",
      status: "Queued",
      location: "Records",
      paymentStatus: "Pending",
      customer: "Electoral Commission",
    },
    {
      id: 3,
      title: "Public Health Guidelines",
      status: "Completed",
      location: "Dispatch",
      paymentStatus: "Paid",
      customer: "Ministry of Health",
    },
  ]);

  const [newJob, setNewJob] = useState({
    title: "",
    status: "",
    location: "",
    paymentStatus: "",
    customer: "",
    Officer: "",
  });

  const addJob = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs([...jobs, { id: jobs.length + 1, ...newJob }]);
    setNewJob({
      title: "",
      status: "",
      location: "",
      paymentStatus: "",
      customer: "",
      Officer: "",
    });
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Works Management
      </Typography>
      <Card sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add New Job
        </Typography>
        <form onSubmit={addJob}>
          <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap={2}>
            <TextField
              label="Job Title"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              required
            />
            <FormControl fullWidth required>
              <InputLabel>Status</InputLabel>
              <Select
                value={newJob.status}
                onChange={(e) =>
                  setNewJob({ ...newJob, status: e.target.value })
                }
                label="Status"
              >
                <MenuItem value="Pending">In Progress</MenuItem>
                <MenuItem value="Paid">Queued</MenuItem>
                <MenuItem value="Failed">Completed</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Location"
              value={newJob.location}
              onChange={(e) =>
                setNewJob({ ...newJob, location: e.target.value })
              }
              required
            />
            <FormControl fullWidth required>
              <InputLabel>Payment Status</InputLabel>
              <Select
                value={newJob.paymentStatus}
                onChange={(e) =>
                  setNewJob({ ...newJob, paymentStatus: e.target.value })
                }
                label="Payment Status"
              >
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Failed">Failed</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Customer"
              value={newJob.customer}
              onChange={(e) =>
                setNewJob({ ...newJob, customer: e.target.value })
              }
              required
            />
            <TextField
              label="Officer"
              value={newJob.Officer}
              onChange={(e) =>
                setNewJob({ ...newJob, Officer: e.target.value })
              }
              required
            />
            <Grid item xs={24} justifyContent={"center"}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ alignSelf: "center" }}
              >
                Add Job
              </Button>
            </Grid>
          </Box>
        </form>
      </Card>
      <AdvancedJobFilter />

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>Job ID</strong>
              </TableCell>
              <TableCell>
                <strong>Job Title</strong>
              </TableCell>
              <TableCell>
                <strong>Status</strong>
              </TableCell>
              <TableCell>
                <strong>Location</strong>
              </TableCell>
              <TableCell>
                <strong>Payment Status</strong>
              </TableCell>
              <TableCell>
                <strong>Customer</strong>
              </TableCell>
              <TableCell>
                <strong>Actions</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{`Gov~${job.id}`}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>
                  <Chip
                    label={job.status}
                    color={
                      job.status === "Completed"
                        ? "success"
                        : job.status === "In Progress"
                        ? "primary"
                        : "warning"
                    }
                  />
                </TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>
                  <Chip
                    label={job.paymentStatus}
                    color={job.paymentStatus === "Paid" ? "success" : "error"}
                  />
                </TableCell>
                <TableCell>{job.customer}</TableCell>
                <TableCell>
                  <Link href={`/jobs/${job.id}`} passHref>
                    <Button color="primary" size="small">
                      View Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
