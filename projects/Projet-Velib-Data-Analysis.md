# Projet Vélib Data Analysis

Summary

A data-driven system to analyze real-time bike station data (Vélib-style) to increase customer satisfaction by optimizing station usage, predicting availability, and detecting anomalies. The platform ingests live telemetry, stores and analyzes time-series data, and provides dashboards and APIs for operational decision making.

Tech Stack

- Python (data processing, ML models)
- Django (REST API backend for data ingestion and dashboards)
- React (frontend dashboards and admin UI)
- PostgreSQL / TimescaleDB (time-series storage)
- Pandas, scikit-learn / XGBoost (data analysis & ML)
- Kafka / Redis Streams (ingestion and event pipeline)

Key Features

- Real-time ingestion of station telemetry (availability, capacity, sensors).
- Short-term availability forecasting (predict bikes/docks available in next 15/30/60 minutes).
- Anomaly detection to surface faulty stations or abnormal usage patterns.
- Optimization suggestions for rebalancing operations to improve service levels.
- Alerting and reporting for operations teams.

Architecture Overview

1. Ingestion: lightweight agents or webhooks push station updates into a streaming layer (Kafka/Redis).
2. Processing: consumer services aggregate and store time-series data into TimescaleDB/Postgres.
3. Modeling: batch and streaming models predict short-term availability and detect anomalies.
4. API/UI: Django provides APIs for predictions and historical queries; React dashboards present visualizations and operator tools.

Example ML use-cases

- Forecasting: train gradient-boosted regression models (XGBoost) on historical usage + weather/time features to predict near-term availability.
- Anomaly detection: unsupervised models (isolation forest or autoencoders) flag stations with abnormal sensor patterns.

Data & Privacy

- Use aggregated, anonymized station telemetry; avoid storing PII unless explicit consent and legal requirements are met.
- Apply rate-limits and secure API access for ingest endpoints.

Impact

- Reduce customer frustration by increasing the probability that bikes/docks are available when needed.
- Decrease operational costs by optimizing rebalancing routes and schedules based on predicted demand.
- Early detection of faulty stations reduces downtime and maintenance overhead.

Next Steps / Enhancements

- Integrate live weather and event data to improve forecasting accuracy.
- Add simulation tools to test rebalancing strategies before deployment.
- Provide an operator mobile app for dynamic rebalancing tasks driven by predictions.
