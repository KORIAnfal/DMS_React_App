import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users"; 
import Dashboard from "./components/Dashboard"; 
import Login from "./components/Login"; 

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