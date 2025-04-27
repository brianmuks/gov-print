"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { Delete, Edit, Add, ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { StoreItem } from "@/app/types/store";

// Sample data - replace with your actual data source
const initialItems: StoreItem[] = [
  {
    id: "1",
    name: "Item 1",
    category: "Electronics",
    department: "Tech",
    lastReorder: "2024-01-10",
    quantity: 50,
  },
  {
    id: "2",
    name: "Item 2",
    category: "Clothing",
    department: "Apparel",
    lastReorder: "2024-01-12",
    quantity: 100,
  },
];

interface EditModalProps {
  open: boolean;
  item: StoreItem | null;
  onClose: () => void;
  onSave: (item: StoreItem) => void;
}

function EditModal({ open, item, onClose, onSave }: EditModalProps) {
  const [formData, setFormData] = useState<StoreItem>(
    item || {
      id: "",
      name: "",
      category: "",
      department: "",
      lastReorder: "",
      quantity: 0,
    }
  );

  const [restockQuantity, setRestockQuantity] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleRestock = () => {
    const updatedQuantity = formData.quantity + restockQuantity;
    setFormData({
      ...formData,
      quantity: updatedQuantity,
      lastReorder: new Date().toISOString().split("T")[0], // Update reorder date
    });
    setRestockQuantity(0); // Reset restock quantity
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{item ? "Edit Item" : "Add New Item"}</DialogTitle>
        <DialogContent>
          <div className="space-y-4 mt-4">
            <TextField
              fullWidth
              label="Item Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Category"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            />
            <TextField
              fullWidth
              label="Department"
              value={formData.department}
              onChange={(e) =>
                setFormData({ ...formData, department: e.target.value })
              }
            />
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: parseInt(e.target.value) })
              }
            />
            <TextField
              fullWidth
              type="date"
              label="Last Reorder"
              value={formData.lastReorder}
              onChange={(e) =>
                setFormData({ ...formData, lastReorder: e.target.value })
              }
              InputLabelProps={{ shrink: true }}
            />

            {/* Restock Section */}
            <Typography variant="h6" mt={2}>
              Request Refill/Restock
            </Typography>
            <TextField
              fullWidth
              type="number"
              label="Quantity to Restock"
              value={restockQuantity}
              onChange={(e) => setRestockQuantity(parseInt(e.target.value))}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={handleRestock}
              disabled={restockQuantity <= 0}
            >
              Restock
            </Button>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default function StoreDetails() {
  const router = useRouter();
  const [items, setItems] = useState<StoreItem[]>(initialItems);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<StoreItem | null>(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<StoreItem | null>(null);

  const handleDelete = (item: StoreItem) => {
    setItemToDelete(item);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      setItems(items.filter((item) => item.id !== itemToDelete.id));
      setDeleteDialogOpen(false);
      setItemToDelete(null);
    }
  };

  const handleEdit = (item: StoreItem) => {
    setEditingItem(item);
    setEditModalOpen(true);
  };

  const handleSave = (updatedItem: StoreItem) => {
    if (editingItem) {
      setItems(
        items.map((item) => (item.id === editingItem.id ? updatedItem : item))
      );
    } else {
      setItems([...items, { ...updatedItem, id: Date.now().toString() }]);
    }
    setEditModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <IconButton onClick={() => router.back()}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h4" component="h1">
            Store Details
          </Typography>
        </div>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => {
            setEditingItem(null);
            setEditModalOpen(true);
          }}
        >
          Add New Item
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Department</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Last Reorder</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell>
                  {new Date(item.lastReorder).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  <IconButton color="primary" onClick={() => handleEdit(item)}>
                    <Edit />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(item)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={deleteDialogOpen}
        onClose={() => setDeleteDialogOpen(false)}
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete {itemToDelete?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      <EditModal
        open={editModalOpen}
        item={editingItem}
        onClose={() => {
          setEditModalOpen(false);
          setEditingItem(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
}
