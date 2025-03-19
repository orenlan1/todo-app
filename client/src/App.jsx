import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import TodosPage from "./pages/TodosPage";
import HomeAuthentication from "./pages/HomeAuthentication";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check session status when the app loads
    axios.get("http://localhost:3000/users/session", { withCredentials: true })
      .then(response => {
        setIsAuthenticated(response.data.authenticated);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/todos" /> : <HomeAuthentication setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/todos" element={<ProtectedRoute isAuthenticated={isAuthenticated}><TodosPage setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

function ProtectedRoute({ isAuthenticated, children }) {
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default App;
