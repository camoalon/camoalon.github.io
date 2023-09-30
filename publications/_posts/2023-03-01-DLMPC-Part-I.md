---
year: 2023-06-01
title: "Distributed and Localized Model Predictive Control. Part I: Synthesis and Implementation"
status: pb
authors: "C. Amo Alonso, J.S. Li, J. Anderson, and N. Matni"
paper-link: https://ieeexplore.ieee.org/document/9939038
other-links: 
  - Code: https://github.com/unstable-zeros/dl-mpc-sls/tree/master/2022_TNCS_DLMPC-Part-I
journal: IEEE Transactions on Control of Network Systems 
type: journal
remark: 
topic: dmpc

---

The increasing presence of large-scale distributed systems highlights the need for scalable control strategies where only local communication is required. Moreover, in safety-critical systems it is imperative that such control strategies handle constraints in the presence of disturbances. In response to this need, we present the Distributed and Localized Model Predictive Control (DLMPC) algorithm for large-scale linear systems. DLMPC is a distributed closed-loop model predictive control (MPC) scheme wherein only local state and model information needs to be exchanged between subsystems for the computation and implementation of control actions. We use the System Level Synthesis (SLS) framework to reformulate the centralized MPC problem, and show that this allows us to naturally impose localized communication constraints between sub-controllers. The structure of the resulting problem can be exploited to develop an Alternating Direction Method of Multipliers (ADMM) based algorithm that allows for distributed and localized computation of closed-loop control policies. We demonstrate that computational complexity of the subproblems solved by each subsystem in DLMPC is independent of the size of the global system. To the best of our knowledge, DLMPC is the first MPC algorithm that allows for the scalable distributed computation as well as implementation of distributed closed-loop control policies, and seemingly deals with additive disturbances. In our companion paper, we show that this approach enjoys recursive feasibility and asymptotic stability.
