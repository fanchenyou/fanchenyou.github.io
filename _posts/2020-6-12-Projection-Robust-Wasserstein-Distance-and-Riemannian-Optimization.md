---
layout: post
author: [Tianyi Lin, Chenyou Fan, Nhat Ho, Marco Cuturi, Michael I. Jordan]
title: Projection Robust Wasserstein Distance and Riemannian Optimization
---
Projection robust Wasserstein (PRW) distance, or Wasserstein projection pursuit (WPP), is a robust variant of the Wasserstein distance. Recent work suggests that this quantity is more robust than the standard Wasserstein distance, in particular when comparing probability measures in high-dimensions. However, it is ruled out for practical application because the optimization model is essentially non-convex and non-smooth which makes the computation intractable. Our contribution in this paper is to revisit the original motivation behind WPP/PRW, but take the hard route of showing that, despite its non-convexity and lack of nonsmoothness, and even despite some hardness results proved by~\citet{Niles-2019-Estimation} in a minimax sense, the original formulation for PRW/WPP \textit{can} be efficiently computed in practice using Riemannian optimization, yielding in relevant cases better behavior than its convex relaxation. More specifically, we provide three simple algorithms with solid theoretical guarantee on their complexity bound (one in the appendix), and demonstrate their effectiveness and efficiency by conducing extensive experiments on synthetic and real data. This paper provides a first step into a computational theory of the PRW distance and provides the links between optimal transport and Riemannian optimization.

###### Conference on Neural Information Processing Systems (NeurIPS'20, spotlight, 20% acceptance rate, 3% spotlight rate)

<a href="https://arxiv.org/abs/2006.07458" target="_blank">for more information</a>