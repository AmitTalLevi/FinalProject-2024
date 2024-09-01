import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import './ChurnPrediction.css';
import { useNavigate } from 'react-router-dom';

const ChurnPrediction = () => {
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

  const [formData, setFormData] = useState({
    customerID: '',
    age: '',
    accountType: 'Checking',
    accountBalance: '',
    transactionFrequency: '',
    serviceUsage: 'Yes',
    customerSupport: '',
    maritalStatus: 'Single',
    gender: 'Male',
    serviceLength: '',
    transactionTypes: '',
    mobileApps: 'Yes',
    numberComplaints: '',
    complaintResolution: '',
    usagePatterns: '',
  });

  const [prediction, setPrediction] = useState({
    churnProbability: 0,
    retentionProbability: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock prediction logic
    const churnProb = Math.random() * 100;
    const retentionProb = 100 - churnProb;
    setPrediction({
      churnProbability: churnProb.toFixed(2),
      retentionProbability: retentionProb.toFixed(2),
    });
  };

  const data = {
    labels: ['Retained', 'Churned'],
    datasets: [
      {
        label: 'Proportion of Customer Churned and Retained',
        data: [prediction.retentionProbability, prediction.churnProbability],
        backgroundColor: ['#4BC0C0', '#FF6384'],
        hoverBackgroundColor: ['#4BC0C0', '#FF6384'],
      },
    ],
  };

  return (
    <div className="churn-container">
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
      <header className="churn-header">
        <h1>Customer Churn Prediction</h1>
        <p>Predict the likelihood of customer churn using our advanced analytics tool.</p>
      </header>
      <div className="churn-content">
        <div className="left-panel">
          <div className="chart-section">
            <h2>Prediction Chart</h2>
            <div className="chart-container">
              <Pie data={data} width={200} height={200} />
            </div>
          </div>
          <div className="info-section">
            <div className="variable-contributions">
              <h3>Variable Contributions</h3>
              <table>
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Age</td>
                    <td>0.25</td>
                  </tr>
                  <tr>
                    <td>Account Balance</td>
                    <td>0.15</td>
                  </tr>
                  <tr>
                    <td>Transaction Frequency</td>
                    <td>0.20</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="target-statistics">
              <h3>Churn Target Statistics</h3>
              <table>
                <thead>
                  <tr>
                    <th>Statistic</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Average Churn Probability</td>
                    <td>35%</td>
                  </tr>
                  <tr>
                    <td>High Risk Churn Rate</td>
                    <td>50%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="right-panel">
          <h2>Predict Churn</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="customerID">Customer ID:</label>
              <input
                type="text"
                id="customerID"
                value={formData.customerID}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input
                type="text"
                id="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Account Type:</label>
              <select
                id="accountType"
                value={formData.accountType}
                onChange={handleChange}
              >
                <option value="Checking">Checking</option>
                <option value="Savings">Savings</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountBalance">Account Balance:</label>
              <input
                type="text"
                id="accountBalance"
                value={formData.accountBalance}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="transactionFrequency">Transaction Frequency:</label>
              <input
                type="text"
                id="transactionFrequency"
                value={formData.transactionFrequency}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="serviceUsage">Service Usage:</label>
              <select
                id="serviceUsage"
                value={formData.serviceUsage}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="customerSupport">Customer Support:</label>
              <input
                type="text"
                id="customerSupport"
                value={formData.customerSupport}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <select
                id="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
              >
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serviceLength">Service Length:</label>
              <input
                type="text"
                id="serviceLength"
                value={formData.serviceLength}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="transactionTypes">Transaction Types:</label>
              <input
                type="text"
                id="transactionTypes"
                value={formData.transactionTypes}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileApps">Mobile Apps:</label>
              <select
                id="mobileApps"
                value={formData.mobileApps}
                onChange={handleChange}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="numberComplaints">Number of Complaints:</label>
              <input
                type="text"
                id="numberComplaints"
                value={formData.numberComplaints}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="complaintResolution">Complaint Resolution:</label>
              <input
                type="text"
                id="complaintResolution"
                value={formData.complaintResolution}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="usagePatterns">Usage Patterns:</label>
              <input
                type="text"
                id="usagePatterns"
                value={formData.usagePatterns}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="predict-button">
              Predict Churn
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChurnPrediction;
