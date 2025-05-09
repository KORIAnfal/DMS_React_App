import * as React from "react";
import { useRef } from "react";
import Box from "@mui/joy/Box";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectFile, clearFile } from "../store/fileUploadSlice";
import Sidebar from "../components/Sidebar";
import {
  Button,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from "@mui/joy";
import FileTable from "../components/FileTable";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function Documents() {
  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: RootState) => state.fileUpload.selectedFile
  );
  const [open, setOpen] = React.useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      dispatch(selectFile(event.target.files[0]));
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile.name);
      dispatch(clearFile());
      setOpen(false);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography level="h2" sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            Documents
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="solid"
              color="primary"
              onClick={() => console.log("Create Folder clicked")}
            >
              + Create Folder
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={() => setOpen(true)}
            >
              + Add File
            </Button>
          </Box>
        </Box>

        <FileTable />

        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog
            sx={{
              width: "500px",
              maxWidth: "90vw",
              padding: "24px",
            }}
          >
            <ModalClose />
            <Typography level="h4">Upload File</Typography>
            <Divider sx={{ my: 2 }} />

            <FormControl
              sx={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              {/* Create a reference for the file input */}
              <input
                type="file"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }} // Hide input
              />

              {/* Button to trigger file input */}
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: 2,
                }}
                onClick={() => fileInputRef.current?.click()} 
              >
                <CloudUploadIcon fontSize="large" />
                <Typography>Choose File</Typography>
              </Button>

              {/* Display selected file name */}
              <Typography level="body-sm" sx={{ mt: 1 }}>
                {selectedFile ? selectedFile.name : "No file chosen"}
              </Typography>
            </FormControl>

            <Button onClick={handleUpload} sx={{ mt: 2 }} color="primary">
              Upload
            </Button>
          </ModalDialog>
        </Modal>
      </Box>
    </Box>
  );
}
