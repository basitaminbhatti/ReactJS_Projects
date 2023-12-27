import React from "react";
import styles from "./InvestorVision.module.css";
import GreenTickCard from "./GreenTickCard";

const project_data = [
  {
    title: "Low entry prices on DeFi tokens",
  },
  {
    title: "Fully decentralized",
  },
  {
    title: "Only vetted projects that passed our due diligence",
  },
  {
    title: "New projects every month",
  },
  {
    title: "High chance of success thanks to our incubation program",
  },
  {
    title: "Yield farming rewards in PIE (up to 100% a year)",
  },
];

const InvestorVision = () => {
  return (
    <>
      <div className={styles.investorVision}>
        <div className={styles.container}>
          <GreenTickCard
            project_data={project_data}
            projectTitle="— For Investors"
            projectHeading="Access high-potential DeFi startups"
            projectSpan="before everyone else"
            projectPara=""
          ></GreenTickCard>

          <div className={`${styles.buttonSpace} heroBtn`}>
            <button type="button" class="btn btn-primary btn-lg heroPrimaryBtn">
              Become an Investor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorVision;
