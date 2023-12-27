import React from "react";
import styles from "../components/ProjectsVision.module.css";
import GreenTickCard from "./GreenTickCard";

const project_data = [
  {
    title: "Decentralized investments",
    description:
      "We'll distribute your tokens among our huge and active community",
  },
  {
    title: "Access to professional investors",
    description:
      "We'll put you in touch with funds and business angels ready to invest larger sums",
  },
  {
    title: "Exchange relations",
    description: "Get better terms when listing your token",
  },
  {
    title: "Staking",
    description: "allow users to stake your tokens on DeFiPie and earn rewards",
  },
  {
    title: "Product-market fit analysis",
  },
  {
    title: "Detailed tokenomics",
  },
  {
    title: "Smart contract audit",
  },
  {
    title: "Community-building and social media marketing",
  },
  {
    title: "White Paper, blog, and media content from the best authors",
  },
];

const ProjectsVision = () => {
  return (
    <>
      <div className={styles.projectsvision}>
        <div className={styles.container}>
          <GreenTickCard
            project_data={project_data}
            projectTitle="— For Projects"
            projectHeading="Vision is the"
            projectSpan="answer"
            projectPara="You have an idea, IncuPie has a plan. We offer everything you need to
            go from an early-stage idea to a successful exchange listing."
          ></GreenTickCard>

          <div className={`${styles.buttonSpace} heroBtn`}>
            <button type="button" class="btn btn-primary btn-lg heroPrimaryBtn">
              I Need Funding
            </button>
            <button
              type="button"
              class="btn btn-secondary btn-lg heroSecondaryBtn"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsVision;
