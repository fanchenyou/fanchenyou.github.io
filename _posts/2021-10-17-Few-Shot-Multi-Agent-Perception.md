---
layout: post
author: [Chenyou Fan, Junjie Hu, Jianwei Huang]
title: Few-Shot Multi-Agent Perception
---
We study few-shot learning (FSL) under multi-agent scenarios, in which participating agents only have local scarce labeled data and need to collaborate to predict query data labels. Though each of the agents, such as drones and robots, has minimal communication and computation capability, we aim at designing coordination schemes such that they can collectively perceive the environment accurately and efficiently. We propose a novel metric-based multi-agent FSL framework which has three main components: an efficient communication mechanism that propagates compact and fine-grained query feature maps from query agents to support agents; an asymmetric attention mechanism that computes region-level attention weights between query and support feature maps; and a metric-learning module which calculates the image-level relevance between query and support data fast and accurately. Through analysis and extensive numerical studies, we demonstrate that our approach can save communication and computation costs and significantly improve performance in both visual and acoustic perception tasks such as face identification, semantic segmentation, and sound genre recognition.

###### 29th ACM International Conference on Multimedia 2021 (ACM MM'21, 27.9% acceptance rate)

<a href="https://dl.acm.org/doi/10.1145/3474085.3475315" target="_blank">for more information</a>