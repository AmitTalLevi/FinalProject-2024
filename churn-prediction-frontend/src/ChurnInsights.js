// src/ChurnInsights.js
import React, { useState } from 'react';
import './ChurnInsights.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ChurnInsights = () => {
  const [selectedAction, setSelectedAction] = useState('Increase Engagement');

  // Example chart data
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Churn Rate Over Time',
        data: [10, 12, 15, 8, 14, 11, 13],
        fill: false,
        borderColor: '#FF6384',
        tension: 0.1,
      },
    ],
  };

  const handleActionChange = (event) => {
    setSelectedAction(event.target.value);
  };

  const handleFeedbackSubmit = (event) => {
    event.preventDefault();
    alert('Feedback submitted!');
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Customer Churn Insights and Recommendations</h1>
      </header>
      <div className="taskbar">
        <a href="/churn-prediction">Go to Churn Prediction</a>
        <a href="/generate-report">Generate Report</a>
        <a href="/churn-insights">View Churn Insights</a>
      </div>
      <div className="content">
        <section className="insights-overview">
          <h2>Insights Overview</h2>
          <p>Explore key insights into customer churn trends and factors that contribute to customer retention or churn.</p>
        </section>
        <section className="key-insights">
          <h3>Key Insights</h3>
          <ul>
            <li>High churn rates are observed among customers with lower account balances.</li>
            <li>Frequent transactions correlate with higher retention rates.</li>
            <li>Online banking usage is a strong indicator of customer satisfaction.</li>
          </ul>
        </section>
        <section className="trend-chart">
          <h2>Churn Rate Trend</h2>
          <div className="chart-wrapper">
            <Line data={trendData} />
          </div>
        </section>
        <section className="insights-download">
          <h2>Download Insights</h2>
          <button className="download-button">Download PDF</button>
        </section>
        <section className="recommendations">
          <h2>Recommendations</h2>
          <form>
            <div className="form-group">
              <label htmlFor="customerID">Customer ID:</label>
              <input type="text" id="customerID" />
            </div>
            <div className="form-group">
              <label htmlFor="action">Recommended Action:</label>
              <select id="action" value={selectedAction} onChange={handleActionChange}>
                <option>Increase Engagement</option>
                <option>Offer Discounts</option>
                <option>Improve Service Quality</option>
                <option>Enhance Customer Support</option>
              </select>
            </div>
            <button type="submit" className="recommend-button">Apply Recommendation</button>
          </form>
        </section>
        <section className="feedback-section">
          <h2>Provide Feedback</h2>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="form-group">
              <label htmlFor="feedback">Your Feedback:</label>
              <textarea id="feedback" rows="4" />
            </div>
            <button type="submit" className="feedback-button">Submit Feedback</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ChurnInsights;
