import * as React from "react";
import Box from "@mui/joy/Box";
import Sidebar from "./Sidebar"; 

export default function Dashboard() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />
    </Box>
  );
}
