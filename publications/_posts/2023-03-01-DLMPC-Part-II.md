---
year: 2023-09-01
title: "Distributed and Localized Model Predictive Control. Part II: Theoretical Guarantees"
status: pb
authors: "C. Amo Alonso, J.S. Li, J. Anderson, and N. Matni"
paper-link: https://ieeexplore.ieee.org/document/10083211
other-links: 
  - Code: https://github.com/unstable-zeros/dl-mpc-sls/tree/master/2022_TNCS_DLMPC-Part-II
  - Video: https://youtu.be/X6AiGiXdxhQ?t=1291
journal: IEEE Transactions on Control of Network Systems 
type: journal
remark: 
award: "Best Paper Award"
topic: dmpc

---

Engineered cyberphysical systems are growing increasingly large and complex. These systems require scalable controllers that robustly satisfy state and input constraints in the presence of additive noise -- such controllers should also be accompanied by theoretical guarantees on feasibility and stability. In our companion paper, we introduced Distributed and Localized Model Predictive Control (DLMPC) for large-scale linear systems; DLMPC is a scalable closed-loop MPC scheme in which subsystems need only exchange local information in order to synthesize and implement local controllers. In this paper, we provide recursive feasibility and asymptotic stability guarantees for DLMPC. We leverage the System Level Synthesis framework to express the maximal positive robust invariant set for the closed-loop system and its corresponding Lyapunov function, both in terms of the closed-loop system responses. We use the invariant set as the terminal set for DLMPC, and show that this guarantees feasibility with minimal conservatism. We use the Lyapunov function as the terminal cost, and show that this guarantees stability. We provide fully distributed and localized algorithms to compute the terminal set offline, and also provide necessary additions to the online DLMPC algorithm to accommodate coupled terminal constraint and cost. In all algorithms, only local information exchanges are necessary, and computational complexity is independent of the global system size -- we demonstrate this analytically and experimentally. This is the first distributed MPC approach that provides minimally conservative yet fully distributed guarantees for recursive feasibility and asymptotic stability, for both nominal and robust settings.
