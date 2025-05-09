import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileUploadState {
  selectedFile: File | null;
}

const initialState: FileUploadState = {
  selectedFile: null,
};

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState,
  reducers: {
    selectFile: (state, action: PayloadAction<File | null>) => {
      state.selectedFile = action.payload;
    },
    clearFile: (state) => {
      state.selectedFile = null;
    },
  },
});

export const { selectFile, clearFile } = fileUploadSlice.actions;
export default fileUploadSlice.reducer;
