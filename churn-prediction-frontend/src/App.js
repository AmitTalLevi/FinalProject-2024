import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ChurnPrediction from './ChurnPrediction';
import HomePage from './HomePage';
import ReportPage from './ReportPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/churn-prediction" element={<ChurnPrediction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
