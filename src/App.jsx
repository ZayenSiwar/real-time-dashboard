import React from 'react';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
