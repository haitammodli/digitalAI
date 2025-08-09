import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Publications from './components/publications/Publications.jsx';
import Stats from './components/stats/Stats.jsx';
import MainLayout from './components/layout/MainLayout.jsx';
import Settings from './components/settings/Settings.jsx'; // <-- ajout

const App = () => {
  return (
    <Routes>
      {/* Routes without navbar */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Routes avec navbar/sidebar */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/settings" element={<Settings />} /> 
      </Route>
    </Routes>
  );
};

export default App;
