import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Publications from './components/publications/Publications.jsx';
import MainLayout from './components/layout/MainLayout.jsx';

const App = () => {
  return (
    <Routes>
      {/* Routes without navbar */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/publications" element={<Publications />} />
      </Route>
    </Routes>
  );
};

export default App;
