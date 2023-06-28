---
layout: post
author: [Chenyou Fan, Yuze Zhang, Yi Pan, Xiaoyue Li, Chi Zhang, Rong Yuan, Di Wu, Wensheng Wang, Jian Pei, Heng Huang]
title: Multi-Horizon Time Series Forecasting with Temporal Attention Learning
---
We propose a novel data-driven approach for solving multi-horizon probabilistic forecasting tasks that predicts the full distribution of a time series on future horizons. We illustrate that temporal patterns hidden in historical information play an important role in accurate forecasting of long time series. Traditional methods rely on setting up temporal dependencies manually to explore related patterns in historical data, which is unrealistic in forecasting long-term series on real-world data. Instead, we propose to explicitly learn constructing hidden patterns' representations with deep neural networks and attending to different parts of the history for forecasting the future.

In this paper, we propose an end-to-end deep-learning framework for multi-horizon time series forecasting, with temporal attention mechanisms to better capture latent patterns in historical data which are useful in predicting the future. Forecasts of multiple quantiles on multiple future horizons can be generated simultaneously based on the learned latent pattern features. We also propose a multimodal fusion mechanism which is used to combine features from different parts of the history to better represent the future. Experiment results demonstrate our approach achieves state-of-the-art performance on two large-scale forecasting datasets in different domains.

###### SIGKDD Conference on Knowledge Discovery and Data Mining 2019 (KDD'19, 20% acceptance rate)

<a href="https://dl.acm.org/doi/10.1145/3292500.3330662" target="_blank">for more information</a><br>
