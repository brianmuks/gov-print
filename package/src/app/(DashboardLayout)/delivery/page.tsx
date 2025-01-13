"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface DeliveryNote {
  id: number;
  description: string;
  number: string;
  date: string;
  quantity: number;
  status: "Full Delivery" | "Part Delivery" | "Rejected";
}

export default function DeliveryNotesManagement() {
  const [deliveryNotes, setDeliveryNotes] = useState<DeliveryNote[]>([
    {
      id: 1,
      description: "Office Supplies",
      number: "DN001",
      date: "2025-01-09",
      quantity: 100,
      status: "Full Delivery",
    },
    {
      id: 2,
      description: "Printer Ink",
      number: "DN002",
      date: "2025-01-08",
      quantity: 50,
      status: "Part Delivery",
    },
  ]);

  const [newDeliveryNote, setNewDeliveryNote] = useState<DeliveryNote>({
    id: 0,
    description: "",
    number: "",
    date: "",
    quantity: 0,
    status: "Full Delivery",
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [selectedDeliveryNote, setSelectedDeliveryNote] =
    useState<DeliveryNote | null>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleAddDeliveryNote = (e: React.FormEvent) => {
    e.preventDefault();
    setDeliveryNotes([
      ...deliveryNotes,
      { ...newDeliveryNote, id: deliveryNotes.length + 1 },
    ]);
    setNewDeliveryNote({
      id: 0,
      description: "",
      number: "",
      date: "",
      quantity: 0,
      status: "Full Delivery",
    });
    setUploadedFile(null);
    setIsAddModalOpen(false);
  };

  const handleDeleteDeliveryNote = (id: number) => {
    setDeliveryNotes(deliveryNotes.filter((note) => note.id !== id));
  };

  const handleViewDetails = (note: DeliveryNote) => {
    setSelectedDeliveryNote(note);
    setIsDetailsModalOpen(true);
  };

  return (
    <Box p={4}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Delivery Notes Management
      </Typography>

      {/* Add and Upload Buttons */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Delivery Note
        </Button>
        <Button variant="contained" color="secondary">
          Upload Scanned Delivery Note
        </Button>
      </Box>

      {/* Delivery Notes Table */}
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell>Delivery Note Number</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveryNotes.map((note) => (
                <TableRow key={note.id}>
                  <TableCell>{note.description}</TableCell>
                  <TableCell>{note.number}</TableCell>
                  <TableCell>{note.date}</TableCell>
                  <TableCell>{note.quantity}</TableCell>
                  <TableCell>{note.status}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleViewDetails(note)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteDeliveryNote(note.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      {/* Add Delivery Note Modal */}
      <Modal open={isAddModalOpen} onClose={() => setIsAddModalOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <Typography variant="h6" mb={2}>
            Add New Delivery Note
          </Typography>
          <form onSubmit={handleAddDeliveryNote}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  fullWidth
                  value={newDeliveryNote.description}
                  onChange={(e) =>
                    setNewDeliveryNote({
                      ...newDeliveryNote,
                      description: e.target.value,
                    })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Delivery Note Number"
                  fullWidth
                  value={newDeliveryNote.number}
                  onChange={(e) =>
                    setNewDeliveryNote({
                      ...newDeliveryNote,
                      number: e.target.value,
                    })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Date"
                  fullWidth
                  type="date"
                  value={newDeliveryNote.date}
                  onChange={(e) =>
                    setNewDeliveryNote({
                      ...newDeliveryNote,
                      date: e.target.value,
                    })
                  }
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Quantity"
                  fullWidth
                  type="number"
                  value={newDeliveryNote.quantity}
                  onChange={(e) =>
                    setNewDeliveryNote({
                      ...newDeliveryNote,
                      quantity: Number(e.target.value),
                    })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={newDeliveryNote.status}
                    onChange={(e) =>
                      setNewDeliveryNote({
                        ...newDeliveryNote,
                        status: e.target.value as DeliveryNote["status"],
                      })
                    }
                    label="Status"
                  >
                    <MenuItem value="Full Delivery">Full Delivery</MenuItem>
                    <MenuItem value="Part Delivery">Part Delivery</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Delivery Note
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Modal>

      {/* View Details Modal */}
      <Modal
        open={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 400,
          }}
        >
          <Typography variant="h6" mb={2}>
            Delivery Note Details
          </Typography>
          {selectedDeliveryNote && (
            <Box>
              <Typography>
                Description: {selectedDeliveryNote.description}
              </Typography>
              <Typography>
                Delivery Note Number: {selectedDeliveryNote.number}
              </Typography>
              <Typography>Date: {selectedDeliveryNote.date}</Typography>
              <Typography>Quantity: {selectedDeliveryNote.quantity}</Typography>
              <Typography>Status: {selectedDeliveryNote.status}</Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
