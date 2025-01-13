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
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function InvoiceManagement() {
  const [invoices, setInvoices] = useState<any>([
    { id: 1, name: "Invoice #001", price: 100, quantity: 2, totalCost: 200 },
    { id: 2, name: "Invoice #002", price: 50, quantity: 5, totalCost: 250 },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [newInvoice, setNewInvoice] = useState({
    name: "",
    price: "",
    quantity: "",
    totalCost: "",
  });
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const handleAddInvoice = (e: React.FormEvent) => {
    e.preventDefault();
    setInvoices([
      ...invoices,
      {
        id: invoices.length + 1,
        ...newInvoice,
        totalCost: Number(newInvoice.price) * Number(newInvoice.quantity),
      },
    ]);
    setNewInvoice({ name: "", price: "", quantity: "", totalCost: "" });
    setIsAddModalOpen(false);
  };

  const handleDeleteInvoice = (id: number) => {
    setInvoices(invoices.filter((invoice: any) => invoice.id !== id));
  };

  const handleViewDetails = (invoice: any) => {
    setSelectedInvoice(invoice);
    setIsDetailsModalOpen(true);
  };

  const filteredInvoices = invoices.filter((invoice: any) =>
    invoice.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box p={4}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Invoice Management
      </Typography>

      {/* Upload and Add Invoice */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <TextField
          label="Search Invoices"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Box>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsAddModalOpen(true)}
            sx={{ mr: 2 }}
          >
            Add Invoice
          </Button>
          <Button variant="contained" color="secondary">
            Upload Invoices
          </Button>
        </Box>
      </Box>

      {/* Invoice Table */}
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total Cost</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredInvoices.map((invoice: any) => (
                <TableRow key={invoice.id}>
                  <TableCell>{invoice.name}</TableCell>
                  <TableCell>${invoice.price}</TableCell>
                  <TableCell>{invoice.quantity}</TableCell>
                  <TableCell>${invoice.totalCost}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => handleViewDetails(invoice)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteInvoice(invoice.id)}
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

      {/* Add Invoice Modal */}
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
            Add New Invoice
          </Typography>
          <form onSubmit={handleAddInvoice}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Invoice Name"
                  fullWidth
                  value={newInvoice.name}
                  onChange={(e) =>
                    setNewInvoice({ ...newInvoice, name: e.target.value })
                  }
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Price"
                  fullWidth
                  type="number"
                  value={newInvoice.price}
                  onChange={(e) =>
                    setNewInvoice({ ...newInvoice, price: e.target.value })
                  }
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Quantity"
                  fullWidth
                  type="number"
                  value={newInvoice.quantity}
                  onChange={(e) =>
                    setNewInvoice({ ...newInvoice, quantity: e.target.value })
                  }
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Invoice
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
            Invoice Details
          </Typography>
          {selectedInvoice && (
            <Box>
              <Typography>Name: {selectedInvoice.name}</Typography>
              <Typography>Price: ${selectedInvoice.price}</Typography>
              <Typography>Quantity: {selectedInvoice.quantity}</Typography>
              <Typography>Total Cost: ${selectedInvoice.totalCost}</Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
