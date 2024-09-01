# Churn Prediction in Banking

<img width="471" alt="Kaggle" src="https://github.com/user-attachments/assets/dbe06c35-fd84-41d2-90e9-187be74e9d28">

## Overview
In today's banking sector, customer retention is crucial for sustained success. Customer churn, where customers terminate their relationship with a bank, poses a significant challenge. This project focuses on leveraging machine learning to predict churn based on historical customer data, including demographics, transactions, and interactions. By analyzing patterns and trends from historical customer data, banks can pinpoint which factors most significantly influence customer decisions to leave. This predictive insight allows financial institutions to implement targeted strategies to retain their customers, improving customer satisfaction and loyalty. Predicting churn offers benefits such as targeted retention strategies, cost reduction, enhanced customer experience, and long-term business growth.

## Features

- **Customer Churn Prediction**: Utilize historical data to predict which customers are likely to churn.
- **Data Visualization**: Generate insightful visualizations, such as box plots and histograms, to understand the distribution of key metrics like credit scores and age.
- **Interactive Reports**: Create and download comprehensive reports detailing customer churn predictions and key insights.
- **Dashboard**: An interactive dashboard for exploring different aspects of customer data and predictions.

## Technologies Used
*Unfortunately, we didn't have time to connect the frontend and backend parts, but in the future we will connect everything.*
- **Frontend**: React, HTML, CSS
- **Backend**: At this point in time we use Python (Node.js, Express *- In the future*)
- **Database**: (Specify database, e.g., PostgreSQL, MongoDB - *In the future*)
- **Machine Learning**: Python, Scikit-learn, and other ML libraries
- **Deployment**: (AWS or Azure *- In the future* )

## Description
- We used "Kaggle" to build the backend in our project.
  The notebook can be viewed under the Backend folder.
- For a demonstration, we created a demo to illustrate the final product.
- We hope that in the near future we will be able to finish connecting the two parts and reach a final product.

**Summary about the backend code:**
 ```
DataFrame:
“bank-customer-churn-prediction”
	from Kaggle Files include:
	Churn_Modelling.csv

“Binary Classification with a Bank Churn Dataset”
from Kaggle Files include: 
sample_submission.csv
test.csv
train.csv
 ```


 ```
1. Data Preparation
  - Feature and Target Extraction: Extracted features (input variables) and the target variable (Exited) from the dataset.
  - Data Splitting: Divided the data into training (70%) and testing sets (30%) using train_test_split.

2. Feature Importance Analysis
  - Model Initialization: Initialized XGBoost, LightGBM, and CatBoost classifiers.
  - Feature Selection: Used the display_feature_importance function to identify and visualize important features based on different percentages.

3. Model Training and Evaluation
  - Model Fitting: Trained XGBoost, LightGBM, and CatBoost classifiers using the selected features.
  - Prediction and Evaluation: Predicted probabilities on the test set and evaluated performance using ROC AUC scores.

4. Hyperparameter Tuning
  - Optuna for XGBoost:
    - Objective Function: Defined to optimize hyperparameters for XGBoost.
      Optimization: Conducted trials to find the best hyperparameters.
  - Optuna for LightGBM:
   - Objective Function: Defined to optimize hyperparameters for LightGBM.
    Optimization: Conducted trials to find the best hyperparameters.
 - Optuna for CatBoost:
    - Objective Function: Defined to optimize hyperparameters for CatBoost.
      Optimization: Conducted trials to find the best hyperparameters.

5. Model Parameter Updates
  - Final Model Parameters: Updated parameters for LightGBM, XGBoost, and CatBoost based on tuning results.

6. Ensemble Model Creation
  - Model Fitting: Fitted updated models on the training data using the selected features.
  - Ensemble Weight Optimization:
  - Objective Function: Defined to optimize weights for combining predictions from XGBoost, LightGBM, and CatBoost.
  - Ensemble Prediction: Combined predictions from individual models using optimized weights and evaluated the ensemble’s performance using ROC AUC score.

7. Visualization
  - Feature Importance Plots: Visualized feature importance for XGBoost, LightGBM, and CatBoost.
  - Performance Plots:
  - AUC Score Plot: Plotted AUC scores for models across different feature percentages.
  - Cumulative Explained Variance Plot: Visualized cumulative explained variance to understand principal components.
 ```

## Backend Results
**Final run and final result**
- The final run by creating an ensamble using three main model we chosed: Cat, XGB and LGB models.
- The result is stored in the file called **"submission.csv"**(because initially we worked in Kaggle notebook), that contain value between 0 and 1 for every row in the test file.
- The closer the value is to 1, the greater the likelihood that the client will leave the bank.

- *Latest Score:* 0.88854 V5 - **89% Predicition**.

  <img width="161" alt="Final" src="https://github.com/user-attachments/assets/d93587a0-44b5-49c9-ae53-a89c719646cc">
  
  <img width="52" alt="Score" src="https://github.com/user-attachments/assets/54346632-50ba-4824-8675-218642139ea4">


## DEMO - Frontend Installation
 ```
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/churn-prediction.git
   cd churn-prediction
   ```

2. **Install Frontend Dependencies**
   Navigate to the frontend directory and install dependencies.
   ```bash
   cd ../frontend
   npm install
   ```

3. **Start the Frontend Server**
   ```bash
   npm start
   ```
4. **Access the Application**
   Open your browser and go to `http://localhost:3000` to access the application.

## Usage

- **Upload Data**: Upload customer data via the application interface.
- **Generate Reports**: Navigate to the "Generate Report" section to create a new churn prediction report.
- **View Insights**: Explore various insights through interactive charts and visualizations.

## In the future

- **User Authentication:** Adding authentication and authorization features enhances data security and provides customized access for different users.
- **Interactive Dashboards:** Interactive dashboards with drill-down capabilities allow users to explore data in detail and gain deeper insights.
- **Customizable Reports:** Allowing users to tailor reports by selecting specific metrics, time periods, or data segments provides flexibility and ensures the reports are relevant to their needs.
- **Scenario Simulations**: Users could simulate different scenarios (e.g., changing pricing, adding new features) to see potential impacts on churn and retention.
  
## Data Structure
- **Customer Data**: Includes attributes such as age, gender, account type, tenure, balance, transaction history, and service usage.
- **Prediction Model**: Trained on historical customer data to predict churn probability.

## DEMO - Screenshots
<img width="763" alt="HomePage" src="https://github.com/user-attachments/assets/84cbcc3b-55eb-4f97-8dba-7a055769d032">
<img width="951" alt="B" src="https://github.com/user-attachments/assets/3c7c5998-4017-44f1-84f5-e4abb51690d9">
<img width="921" alt="C" src="https://github.com/user-attachments/assets/ef59daf1-7a67-4c80-ac1b-b4a023da6cdd">
<img width="356" alt="Insight" src="https://github.com/user-attachments/assets/56d1eca8-d1e0-4aab-896e-fc4b0037dd3f">

