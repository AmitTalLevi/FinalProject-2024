import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate('/report'); 
  };

  const handleGoToChurnPrediction = () => {
    navigate('/churn-prediction'); // forward to ChurnPrediction
  };

  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1>Select Categories for Customer Churn Report</h1>
      </header>
      <div className="categories-grid">
        <div className="category-card">Demographics (Age, Gender, Marital Status)</div>
        <div className="category-card">Account Details (Account Type, Tenure, Balance)</div>
        <div className="category-card">Transaction History (Frequency and Types)</div>
        <div className="category-card">Service Usage (Online Banking, Mobile Apps)</div>
        <div className="category-card">Customer Support (Number of Complaints, Resolution Time)</div>
        <div className="category-card">Behavior Patterns (Service Usage and Transaction Frequency)</div>
      </div>
      <div className="buttons-container">
        <button className="generate-report-button" onClick={handleGenerateReport}>
          Generate Report
        </button>
        <button className="churn-prediction-button" onClick={handleGoToChurnPrediction}>
          Go to Churn Prediction
        </button>
      </div>
    </div>
  );
}

export default HomePage;
