import { Routes, Route } from 'react-router-dom';
import Login from './components/login/Login.jsx';
import Register from './components/login/Register.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login />} /> {/* Redirige toutes les autres URLs vers login */}
    </Routes>
  );
};

export default App;
