---
year: 2025-03-31
title: "System Level Synthesis for Affine Control Policies: Model Based and Data-Driven Settings"
status: pb
authors: "L. Schuepp, Giulia De Pasquale, Florian Dorfler and C. Amo Alonso"
paper-link:
other-links: 
    - Code: https://github.com/lukaschu/SLS-for-Affine-Policies
journal: IEEE Conference on Decision and Control (CDC)
type: conference
remark: 
topic: dmpc

---

There is an increasing need for effective control of systems with complex dynamics, particularly through data-driven approaches. System Level Synthesis (SLS) has emerged as a powerful framework that facilitates the control of large-scale systems while accounting for model uncertainties. SLS approaches are currently limited to linear systems and time-varying linear control policies, thus limiting the class of achievable control strategies. We introduce a novel closed-loop parameterization for time-varying affine control policies, extending the SLS framework to a broader class of systems and policies. We show that the closed-loop behavior under affine policies can be equivalently characterized using past system trajectories, enabling a fully data-driven formulation. This parameterization seamlessly integrates affine policies into optimal control problems, allowing for a closed-loop formulation of general Model Predictive Control (MPC) problems. To the best of our knowledge, this is the first work to extend SLS to affine policies in both model-based and data-driven settings, enabling an equivalent formulation of MPC problems using closed-loop maps. We validate our approach through numerical experiments, demonstrating that our model-based and data-driven affine SLS formulations achieve performance on par with traditional model-based MPC.
