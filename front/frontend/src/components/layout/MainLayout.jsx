import React from 'react';
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
