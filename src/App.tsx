import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users"; 
import Dashboard from "./pages/Dashboard"; 
import Login from "./pages/Login"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;