import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const EditPotency = ({
  openEditModal,
  setOpenEditModal,
  editInput,
  setEditInput,
  handleSave,
  validationErrors,
}) => {
  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    handleSave();
  };

  return (
    <Dialog open={openEditModal} onClose={() => setOpenEditModal(false)} fullWidth maxWidth="sm">
      <DialogTitle>Edit Potency</DialogTitle>
      <MDBox component="form" onSubmit={handleSubmit}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <MDBox>
                <TextField
                  label="Potency"
                  name="Potency"
                  value={editInput?.Potency || ""}
                  onChange={(e) =>
                    setEditInput((prev) => ({
                      ...prev,
                      Potency: e.target.value,
                    }))
                  }
                  fullWidth
                  margin="normal"
                  error={!!validationErrors.Potency}
                  helperText={validationErrors.Potency}
                />
              </MDBox>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <MDButton type="submit" color="success">
            Save
          </MDButton>
          <Button onClick={() => setOpenEditModal(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </MDBox>
    </Dialog>
  );
};

export default EditPotency;
