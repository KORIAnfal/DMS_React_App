import * as React from "react";
import Box from "@mui/joy/Box";
import Sidebar from "../components/Sidebar"; 
import { Button, Divider, Typography } from "@mui/joy";
import FileTable from "../components/FileTable"; 

export default function Documents() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography level="h2" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Documents
          </Typography>
          <Box> 
          <Button variant="solid" color="primary" onClick={() => console.log("Add User clicked")}>
            + Create Folder
          </Button>
          
          <Button variant="solid" color="primary" onClick={() => console.log("Add User clicked")}>
            + Add File
          </Button>

          </Box>
        </Box>
         
         <FileTable/>
        
        
      </Box>
    </Box>
  );
}
