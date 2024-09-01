// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ChurnPrediction from './ChurnPrediction';
import HomePage from './HomePage';
import ReportPage from './ReportPage';
import ChurnInsights from './ChurnInsights';  // Import the ChurnInsights component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/churn-prediction" element={<ChurnPrediction />} />
          <Route path="/churn-insights" element={<ChurnInsights />} /> {/* Add this route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
