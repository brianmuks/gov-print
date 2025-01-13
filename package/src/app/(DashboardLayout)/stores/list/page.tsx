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
} from "@mui/material";
import { Delete, Visibility, Add } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Store } from "@/app/types/store";

// Sample data - replace with your actual data source
const initialStores: Store[] = [
  {
    id: "1",
    name: "Downtown Store",
    itemCount: 150,
    leader: "John Doe",
    lastReorder: "2024-01-10",
  },
  {
    id: "2",
    name: "Mall Store",
    itemCount: 200,
    leader: "Jane Smith",
    lastReorder: "2024-01-12",
  },
];

export default function StoreList() {
  const router = useRouter();
  const [stores, setStores] = useState<Store[]>(initialStores);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [storeToDelete, setStoreToDelete] = useState<Store | null>(null);

  const handleDelete = (store: Store) => {
    setStoreToDelete(store);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (storeToDelete) {
      setStores(stores.filter((store) => store.id !== storeToDelete.id));
      setDeleteDialogOpen(false);
      setStoreToDelete(null);
    }
  };

  const viewDetails = (storeId: string) => {
    router.push(`/stores/${storeId}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" component="h1">
          Stores
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Add />}
          onClick={() => router.push("/stores/new")}
        >
          Add New Store
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Store Name</TableCell>
              <TableCell align="right">Items Count</TableCell>
              <TableCell>Store Leader</TableCell>
              <TableCell>Last Reorder</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stores.map((store) => (
              <TableRow key={store.id}>
                <TableCell>{store.name}</TableCell>
                <TableCell align="right">{store.itemCount}</TableCell>
                <TableCell>{store.leader}</TableCell>
                <TableCell>
                  {new Date(store.lastReorder).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    color="primary"
                    onClick={() => viewDetails(store.id)}
                  >
                    <Visibility />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDelete(store)}>
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
          Are you sure you want to delete {storeToDelete?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
