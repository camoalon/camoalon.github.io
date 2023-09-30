---
year: 2021-06-01
title: "Frontiers in Scalable Distributed Control: SLS, MPC, and Beyond"
status: pb
authors: "J.S. Li, C. Amo Alonso, and J. C. Doyle"
paper-link: https://ieeexplore.ieee.org/document/9483130
other-links: 
journal: IEEE American Control Conference (ACC) 
type: conference
remark: 
topic: dmpc

---

The System Level Synthesis (SLS) approach facilitates distributed control of large cyberphysical networks in an easy-to-understand, computationally scalable way. We present an overview of the SLS approach and its associated extensions in nonlinear control, MPC, adaptive control, and learning for control. To illustrate the effectiveness of SLS-based methods, we present a case study motivated by the power grid, with communication constraints, actuator saturation, disturbances, and changing setpoints. This simple but challenging case study necessitates the use of model predictive control (MPC); however, standard MPC techniques often scales poorly to large systems and incurs heavy computational burden. To address this challenge, we combine two SLS-based controllers to form a layered MPC-like controller. Our controller has constant computational complexity with respect to the system size, gives a 20-fold reduction in online computation requirements, and still achieves performance that is within 3% of the centralized MPC controller.
