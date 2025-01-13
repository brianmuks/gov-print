"use client";

import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Paper Co.",
      address: "123 Main St, City",
      contact: "john@paperco.com",
    },
    {
      id: 2,
      name: "Ink Supplies Ltd.",
      address: "456 Elm St, Town",
      contact: "sarah@inksupplies.com",
    },
    {
      id: 3,
      name: "Chem Solutions",
      address: "789 Oak Rd, Village",
      contact: "mike@chemsolutions.com",
    },
  ]);

  const [newSupplier, setNewSupplier] = useState({
    name: "",
    address: "",
    contact: "",
  });

  const addSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    setSuppliers([...suppliers, { id: suppliers.length + 1, ...newSupplier }]);
    setNewSupplier({ name: "", address: "", contact: "" });
  };

  return (
    <Box p={4}>
      {/* Header */}
      <Typography variant="h4" gutterBottom>
        Supplier Management
      </Typography>

      {/* Add New Supplier */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Add New Supplier
        </Typography>
        <form onSubmit={addSupplier}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Supplier Name"
                value={newSupplier.name}
                onChange={(e) =>
                  setNewSupplier({ ...newSupplier, name: e.target.value })
                }
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Address"
                value={newSupplier.address}
                onChange={(e) =>
                  setNewSupplier({ ...newSupplier, address: e.target.value })
                }
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Contact"
                value={newSupplier.contact}
                onChange={(e) =>
                  setNewSupplier({ ...newSupplier, contact: e.target.value })
                }
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ height: "100%" }}
              >
                Add Supplier
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Supplier Table */}
      <Paper elevation={3}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle2">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">Address</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle2">Contact</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell>{supplier.name}</TableCell>
                  <TableCell>{supplier.address}</TableCell>
                  <TableCell>{supplier.contact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
