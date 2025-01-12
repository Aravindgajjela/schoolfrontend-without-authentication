import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Import the global styles
import TransactionsOverview from './components/TransactionsOverview';
import TransactionDetails from './components/TransactionDetails';
import TransactionStatus from './components/TransactionStatus';
import DarkModeToggle from './components/DarkModeToggle';
import RealTimeChart from './components/RealTimeChart';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Dark Mode Toggle */}
        <DarkModeToggle />
        
        {/* Main Content */}
        <div className="container mt-4">
          <h1>School Payments Dashboard</h1>
          <Routes>
            {/* Define Routes for Different Components */}
            <Route path="/" element={<TransactionsOverview />} />
            <Route path="/transactions-by-school" element={<TransactionDetails />} />
            <Route path="/transaction-status" element={<TransactionStatus />} />
            <Route path="/real-time-chart" element={<RealTimeChart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
