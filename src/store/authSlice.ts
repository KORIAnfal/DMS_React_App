import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  password: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<string>) => {
        state.email = action.payload;
    },
      setPassword: (state, action: PayloadAction<string>) => {
        state.password = action.payload;
      },
      login: (state) => {
        state.isAuthenticated = true;
      },
      logout: (state) => {
        state.email = "";
        state.password = "";
        state.isAuthenticated = false;
    },
  },
});

export const { setEmail, setPassword, login, logout } = authSlice.actions;
export default authSlice.reducer;
