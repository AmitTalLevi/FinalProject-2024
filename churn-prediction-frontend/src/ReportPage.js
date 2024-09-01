import React from 'react';
import './ReportPage.css';

function ReportPage() {
  return (
    <div className="report-container">
      <header className="report-header">
        <h1>Customer Churn Report</h1>
      </header>
      <div className="report-content">
        <div className="chart-section">
          <h2>Box Plot for CreditScore</h2>
          {/* use Chart.js */}
        </div>
        <div className="chart-section">
          <h2>Histogram for CreditScore</h2>
          {/* more graph*/}
        </div>
        <div className="chart-section">
          <h2>Box Plot for Age</h2>
          {/* praph 2*/}
        </div>
        <div className="chart-section">
          <h2>Histogram for Age</h2>
          {/* graph 3*/}
        </div>
      </div>
      <button className="download-button">
        Download
      </button>
    </div>
  );
}

export default ReportPage;
