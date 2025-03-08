import { Routes, Route, Navigate } from "react-router-dom";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { JSX } from "react";
import { CssVarsProvider } from "@mui/joy";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <CssVarsProvider>
    <Routes>
      <Route path="/" element={<Login />} /> 
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
    </Routes>
    </CssVarsProvider>
  );
}

export default App;
