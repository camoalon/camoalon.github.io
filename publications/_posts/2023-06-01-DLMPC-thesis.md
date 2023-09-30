---
year: 2023-09-01
title: "Distributed and Localized Model Predictive Control"
status: pb
authors: "C. Amo Alonso"
paper-link: https://thesis.library.caltech.edu/15262/
other-links: 
  - Code: https://github.com/unstable-zeros/dl-mpc-sls
journal: 
type: thesis
remark: 

---

The increasing presence of large-scale distributed systems highlights the need for scalable control strategies where only local communication is required. Moreover, in safety-critical systems it is imperative that such control strategies handle constraints in the presence of disturbances and enjoy theoretical and performance guarantees. In response to this need, we present the Distributed and Localized Model Predictive Control (DLMPC) algorithm for large-scale linear systems. DLMPC is a distributed closed-loop model predictive control (MPC) scheme wherein only local state and model information needs to be exchanged between subsystems for the computation and implementation of control actions. The resulting distributed algorithms tackle various types of additive disturbances and enjoy recursive feasibility and asymptotic stability guarantees that introduce minimal conservatism and can be computed in an offline fashion without adding to the computational burden. We also provide analysis and guarantees on the global performance of DLMPC, and demonstrate that in cases where the underlying topology of the system is sparse (as is the case in most large-scale networks), the inclusion of local communication constraints does not result in a suboptimal solution. Moreover, we show that when no noise is present, this algorithm can be extended to the purely data-driven case where all previous guarantees hold and the need for a model is fully replaced by past-trajectory data. We show that the amount of data needed for our synthesis problem is independent of the size of the global system. Lastly, we explore the potential of DLMPC for hardware accelerated implementation in GPU by exploiting the fact that the structure of the DLMPC problem captures some of the limitations of GPU computations. In all algorithmic and theoretical results presented in this thesis, only local information exchange is necessary, and computational complexity is independent of the global system size. DLMPC is the first MPC algorithm that allows for the scalable, efficient and data-driven computation and implementation of distributed closed-loop control policies and enjoys theoretical guarantees.
