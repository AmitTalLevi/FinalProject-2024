import 'chart.js/auto';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ChurnPrediction.css';

const ChurnPrediction = () => {
  // the graph data
  const data = {
    labels: ['Retained', 'Churned'],
    datasets: [
      {
        label: 'Proportion of customer churned and retained',
        data: [79.6, 20.4], // Pie chart data
        backgroundColor: ['#FF6384', '#36A2EB'], 
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Customer Churn Prediction</h1>
        <p>Welcome to our predictive analysis tool for bank customer churn.</p>
      </header>
      <div className="content">
        <div className="left-panel">
          <div className="chart">
            <h2>Prediction Chart</h2>
            <Pie data={data} />
          </div>
          <div className="variable-contributions">
            <h2>Variable Contributions</h2>
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
                  <td>-0.15</td>
                </tr>
                <tr>
                  <td>Transaction Frequency</td>
                  <td>0.20</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="target-statistics">
            <h2>Target Statistics</h2>
            <table>
              <thead>
                <tr>
                  <th>Data partition</th>
                  <th>Target Category</th>
                  <th>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Train</td>
                  <td>Churn Probability</td>
                  <td>65%</td>
                </tr>
                <tr>
                  <td>Train</td>
                  <td>Retention Probability</td>
                  <td>35%</td>
                </tr>
                <tr>
                  <td>Validation</td>
                  <td>Churn Probability</td>
                  <td>60%</td>
                </tr>
                <tr>
                  <td>Validation</td>
                  <td>Retention Probability</td>
                  <td>40%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="right-panel">
          <h2>Prediction Form</h2>
          <form>
            <div className="form-group">
              <label htmlFor="customerID">Customer ID:</label>
              <input type="text" id="customerID" />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age:</label>
              <input type="number" id="age" />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender:</label>
              <select id="gender">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="maritalStatus">Marital Status:</label>
              <select id="maritalStatus">
                <option>Single</option>
                <option>Married</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="accountType">Account Type:</label>
              <select id="accountType">
                <option>Checking</option>
                <option>Savings</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="serviceLength">Service Length (months):</label>
              <input type="number" id="serviceLength" />
            </div>
            <div className="form-group">
              <label htmlFor="accountBalance">Account Balance (in $):</label>
              <input type="number" id="accountBalance" />
            </div>
            <div className="form-group">
              <label htmlFor="transactionFrequency">Transaction Frequency:</label>
              <input type="number" id="transactionFrequency" />
            </div>
            <div className="form-group">
              <label htmlFor="transactionTypes">Transaction Types:</label>
              <input type="text" id="transactionTypes" />
            </div>
            <div className="form-group">
              <label htmlFor="onlineBanking">Online Banking Usage:</label>
              <select id="onlineBanking">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mobileApps">Mobile Apps Usage:</label>
              <select id="mobileApps">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="customerSupport">Customer Support:</label>
              <input type="text" id="customerSupport" />
            </div>
            <div className="form-group">
              <label htmlFor="numberComplaints">Number of Complaints:</label>
              <input type="number" id="numberComplaints" />
            </div>
            <div className="form-group">
              <label htmlFor="complaintResolution">Complaint Resolution Time (days):</label>
              <input type="number" id="complaintResolution" />
            </div>
            <div className="form-group">
              <label htmlFor="usagePatterns">Usage Patterns:</label>
              <input type="text" id="usagePatterns" />
            </div>
            <button type="submit" className="predict-button">Predict Churn</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChurnPrediction;
