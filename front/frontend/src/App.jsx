// App.js
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} />
      <Route path="/navbar" element={<Navbar />} />

      {/* Dashboard route with Navbar */}
      <Route
        path="/dashboard"
        element={
          <div className="app-container">
            <Navbar />
            <Dashboard />
          </div>
        }
      />
    </Routes>
  );
};

export default App;
