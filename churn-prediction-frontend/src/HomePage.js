import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './HomePage.css';
import homeImage from './home.png'; // Ensure these paths are correct
import reportsImage from './reports.jpg';
import insightsImage from './insight.jpg';

function HomePage() {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    navigate('/report'); 
  };

  const handleGoToChurnPrediction = () => {
    navigate('/churn-prediction'); 
  };

  const handleGoToChurnInsights = () => {
    navigate('/churn-insights'); 
  };

  return (
    <div className="homepage-container">
      <div className="taskbar">
        
        <button className="taskbar-button churn-prediction-button" onClick={handleGoToChurnPrediction}>
          Go to Churn Prediction
        </button>
        <button className="taskbar-button generate-report-button" onClick={handleGenerateReport}>
          Generate Report
        </button>
        <button className="taskbar-button churn-insights-button" onClick={handleGoToChurnInsights}>
          View Churn Insights
        </button>
      </div>
      
      <header className="homepage-header">
        <h1>Welcome to Our Churn Prediction App</h1>
      </header>
      
      <div className="homepage-images-container">
        <div className="homepage-image-item">
          <Link to="/churn-prediction">
            <img src={homeImage} alt="Churn Prediction" className="homepage-image" />
          </Link>
          <p className="homepage-image-caption">Go to Churn Prediction</p>
        </div>
        <div className="homepage-image-item">
          <Link to="/report">
            <img src={reportsImage} alt="Generate Reports" className="homepage-image" />
          </Link>
          <p className="homepage-image-caption">Generate Reports</p>
        </div>
        <div className="homepage-image-item">
          <Link to="/churn-insights">
            <img src={insightsImage} alt="View Churn Insights" className="homepage-image" />
          </Link>
          <p className="homepage-image-caption">View Churn Insights</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
