import React from 'react';
import './ReportPage.css';
import { useNavigate } from 'react-router-dom';

function ReportPage() {
  const navigate = useNavigate();

  const handleGoToChurnPrediction = () => {
    navigate('/churn-prediction');
  };

  const handleGenerateReport = () => {
    navigate('/report');
  };

  const handleGoToChurnInsights = () => {
    navigate('/churn-insights');
  };

  return (
    <div className="report-container">
      <div className="taskbar">
        <button className="taskbar-button" onClick={handleGoToChurnPrediction}>
          Go to Churn Prediction
        </button>
        <button className="taskbar-button" onClick={handleGenerateReport}>
          Generate Report
        </button>
        <button className="taskbar-button" onClick={handleGoToChurnInsights}>
          View Churn Insights
        </button>
      </div>
      <header className="report-header">
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
      <div className="report-content">
        <div className="chart-section">
          <h2>Box Plot for CreditScore</h2>
          {/* Add your Chart.js component here */}
        </div>
        <div className="chart-section">
          <h2>Histogram for CreditScore</h2>
          {/* Add your Chart.js component here */}
        </div>
        <div className="chart-section">
          <h2>Box Plot for Age</h2>
          {/* Add your Chart.js component here */}
        </div>
        <div className="chart-section">
          <h2>Histogram for Age</h2>
          {/* Add your Chart.js component here */}
        </div>
      </div>
      <div className="buttons-container">
        <button className="download-button">
          Download
        </button>
      </div>
    </div>
  );
}

export default ReportPage;
