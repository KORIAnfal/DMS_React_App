import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/Users"; // Import Users page
import Dashboard from "./components/Dashboard"; // Example for other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;