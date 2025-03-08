import * as React from "react";
import Box from "@mui/joy/Box";
import Sidebar from "./Sidebar"; 
import Header from "./Header";
import UserTable from "./UserTable";
import { Typography, Button, Modal, ModalDialog, Input, Stack } from "@mui/joy";

export default function Users() {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    role: "",
    email: "",
    password: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography level="h1" sx={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            Users
          </Typography>
          <Button variant="solid" color="primary" onClick={handleOpen}>
            + Add User
          </Button>
        </Box>
        <UserTable />
        <Modal open={open} onClose={handleClose}>
          <ModalDialog sx={{ width: 400, p: 3, borderRadius: "md" }}>
            <Typography level="h4" fontWeight="bold" mb={2}>
              Add User
            </Typography>
            <Stack spacing={2}>
              <Input placeholder="Name" name="name" value={formData.name} onChange={handleChange} />
              <Input placeholder="Role" name="role" value={formData.role} onChange={handleChange} />
              <Input placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
              <Input placeholder="Password" name="password" type="password" value={formData.password} onChange={handleChange} />
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
              <Button onClick={handleClose} color="neutral" sx={{ mr: 1 }}>Cancel</Button>
              <Button onClick={() => { console.log(formData); handleClose(); }} color="primary">Add</Button>
            </Box>
          </ModalDialog>
        </Modal>
      </Box>
    </Box>
  );
}
