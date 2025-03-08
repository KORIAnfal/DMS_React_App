import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users"; 
import Dashboard from "./components/Dashboard"; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;