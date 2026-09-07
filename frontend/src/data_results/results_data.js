import {
    // 2026
    EAPCET_2026_RANKERS,
    NEET_2026_RANKERS,
    JEE_MAINS_2026_RANKERS,
    JEE_ADVANCED_2026_RANKERS,
    IPE_JUNIOR_MPC_2026_RANKERS,
    IPE_JUNIOR_BIPC_2026_RANKERS,
    IPE_SENIOR_MPC_2026_RANKERS,
    IPE_SENIOR_BIPC_2026_RANKERS,
  
    // 2025
    EAPCET_2025_RANKERS,
    NEET_2025_RANKERS,
    JEE_MAINS_2025_RANKERS,
    JEE_ADVANCED_2025_RANKERS,
    IPE_MPC_2025_RANKERS,
    IPE_BIPC_2025_RANKERS,
  
    // 2024
    NEET_2024_RANKERS,
    JEE_MAINS_2024_RANKERS,
    JEE_ADVANCED_2024_RANKERS,
    IPE_2024_SENIOR_RESULTS,
    IPE_2024_JUNIOR_RESULTS,
  
    // 2021
    NEET_2021_RANKERS,
    IIT_2021_RANKERS,
    INTER_MPC_RESULTS,
    INTER_BIPC_RESULTS,
  
    // 2020
    NEET_2020_RANKERS,
    JEE_MAINS_2020_RANKERS,
  
    // 2018-19 / 2019-20
    NEET_2018_19_RANKERS,
    JEE_MAINS_2019_20_RANKERS,
    IIT_MAINS_2018_19_RANKERS,
  } from "./rankers_data";
  
  /* =========================================================
     2024 IPE data comes as two combined arrays (Jr. MPC + Jr.
     BIPC together, Sr. MPC + Sr. BIPC together). Split them by
     the `stream` field so they slot into the same shape as
     every other year.
  ========================================================= */
  
  const IPE_JUNIOR_MPC_2024_RANKERS = IPE_2024_JUNIOR_RESULTS.filter(
    (s) => s.stream === "Jr. MPC"
  );
  
  const IPE_JUNIOR_BIPC_2024_RANKERS = IPE_2024_JUNIOR_RESULTS.filter(
    (s) => s.stream === "Jr. BIPC"
  );
  
  const IPE_SENIOR_MPC_2024_RANKERS = IPE_2024_SENIOR_RESULTS.filter(
    (s) => s.stream === "Sr. MPC"
  );
  
  const IPE_SENIOR_BIPC_2024_RANKERS = IPE_2024_SENIOR_RESULTS.filter(
    (s) => s.stream === "Sr. BIPC"
  );
  
  export const RESULTS_DATA = {
    2026: {
      EAPCET: EAPCET_2026_RANKERS,
      NEET: NEET_2026_RANKERS,
      JEE_MAINS: JEE_MAINS_2026_RANKERS,
      JEE_ADVANCED: JEE_ADVANCED_2026_RANKERS,
  
      IPE_JUNIOR_MPC: IPE_JUNIOR_MPC_2026_RANKERS,
      IPE_JUNIOR_BIPC: IPE_JUNIOR_BIPC_2026_RANKERS,
      IPE_SENIOR_MPC: IPE_SENIOR_MPC_2026_RANKERS,
      IPE_SENIOR_BIPC: IPE_SENIOR_BIPC_2026_RANKERS,
    },
  
    2025: {
      EAPCET: EAPCET_2025_RANKERS,
      NEET: NEET_2025_RANKERS,
      JEE_MAINS: JEE_MAINS_2025_RANKERS,
      JEE_ADVANCED: JEE_ADVANCED_2025_RANKERS,
  
      // Only one MPC / one BiPC list survives for 2025 (out of
      // 470 / 440 respectively) — that maps to the Junior IPE.
      IPE_JUNIOR_MPC: IPE_MPC_2025_RANKERS,
      IPE_JUNIOR_BIPC: IPE_BIPC_2025_RANKERS,
    },
  
    2024: {
      NEET: NEET_2024_RANKERS,
      JEE_MAINS: JEE_MAINS_2024_RANKERS,
      JEE_ADVANCED: JEE_ADVANCED_2024_RANKERS,
  
      IPE_JUNIOR_MPC: IPE_JUNIOR_MPC_2024_RANKERS,
      IPE_JUNIOR_BIPC: IPE_JUNIOR_BIPC_2024_RANKERS,
      IPE_SENIOR_MPC: IPE_SENIOR_MPC_2024_RANKERS,
      IPE_SENIOR_BIPC: IPE_SENIOR_BIPC_2024_RANKERS,
    },
  
    2021: {
      NEET: NEET_2021_RANKERS,
      // No numeric rank in this dataset (institute name only),
      // still renders fine — ProfileCard falls back gracefully.
      JEE_ADVANCED: IIT_2021_RANKERS,
  
      IPE_SENIOR_MPC: INTER_MPC_RESULTS,
      IPE_SENIOR_BIPC: INTER_BIPC_RESULTS,
    },
  
    2020: {
      NEET: NEET_2020_RANKERS,
      JEE_MAINS: JEE_MAINS_2020_RANKERS,
    },
  
    2019: {
      NEET: NEET_2018_19_RANKERS,
      JEE_MAINS: JEE_MAINS_2019_20_RANKERS,
      JEE_ADVANCED: IIT_MAINS_2018_19_RANKERS,
    },
  };