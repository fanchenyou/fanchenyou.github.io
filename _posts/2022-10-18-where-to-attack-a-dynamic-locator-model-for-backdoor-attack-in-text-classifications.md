---
layout: post
author: [Heng-yang Lu, Chenyou Fan, Jun Yang,Cong Hu,Wei Fang,Xiao-jun Wu]
title: Where to Attack：A Dynamic Locator Model for Backdoor Attack in Text Classifications
---
Nowadays, deep-learning based NLP models are usually trained with large-scale third-party data which can be easily injected with malicious backdoors. Thus, BackDoor Attack (BDA) study has become a trending research to help promote the robustness of an NLP system. Text-based BDA aims to train a poisoned model with both clean and poisoned texts to perform normally on clean inputs while being misled to predict those trigger-embedded texts as target labels set by attackers. Previous works usually choose fixed Positions-to-Poison (P2P) first, then add triggers upon those positions such as letter insertion or deletion. However, considering the positions of words with important semantics may vary in different contexts, fixed P2P models are severely limited in flexibility and performance. We study the text-based BDA from the perspective of automatically and dynamically selecting P2P from contexts. We design a novel Locator model which can predict P2P dynamically without human intervention. Based on the predicted P2P, four effective strategies are introduced to show the BDA performance. Experiments on two public datasets show both tinier test accuracy gap on clean data and higher attack success rate on poisoned ones. Human evaluation with volunteers also shows the P2P predicted by our model are important for classification. 

###### International Conference on Computational Linguistics (COLING-22)

<a href="https://github.com/jncsnlp/LocatorModel" target="_blank">Source code is available here</a><br>
<a href="https://arxiv.org/abs/2305.03224" target="_blank">for more information</a>