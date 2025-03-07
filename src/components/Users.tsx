import * as React from "react";
import Box from "@mui/joy/Box";
import Sidebar from "./Sidebar"; 
import Header from "./Header"
import UserTable from "./UserTable"
import { Typography } from "@mui/joy";

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh"}}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Typography level="h1" sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}>
          Users
        </Typography>

        {/* User Table */}
        <UserTable />
      </Box>
      

    </Box>
  );
}
