---
year: 2023-09-01
title: "Global performance guarantees for localized model predictive control"
status: pb
authors: "J.S. Li, C. Amo Alonso"
paper-link: https://arxiv.org/abs/2303.11264
other-links: 
  - Code: https://github.com/flyingpeach/LocalizedMPCPerformance
  - Video: https://www.youtube.com/watch?v=X6AiGiXdxhQ&t=2073s
journal: IEEE Open Journal of Control Systems 
type: journal
remark: 
topic: dmpc

---

Recent advances in model predictive control (MPC) leverage local communication constraints to produce localized MPC algorithms whose complexities scale independently of total network size. However, no characterization is available regarding global performance, i.e. whether localized MPC (with communication constraints) performs just as well as global MPC (no communication constraints). In this paper, we provide analysis and guarantees on global performance of localized MPC -- in particular, we derive sufficient conditions for optimal global performance in the presence of local communication constraints. We also present an algorithm to determine the communication structure for a given system that will preserve performance while minimizing computational complexity. The effectiveness of the algorithm is verified in simulations, and additional relationships between network properties and performance-preserving communication constraints are characterized. A striking finding is that in a network of 121 coupled pendula, each node only needs to communicate with its immediate neighbors to preserve optimal global performance. Overall, this work offers theoretical understanding on the effect of local communication on global performance, and provides practitioners with the tools necessary to deploy localized model predictive control by establishing a rigorous method of selecting local communication constraints. This work also demonstrates -- surprisingly -- that the inclusion of severe communication constraints need not compromise global performance.
