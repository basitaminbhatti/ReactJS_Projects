import React from "react";
import styles from "../components/SideImage.module.css";

const SideImage = () => {
  return (
    <>
      <div className={`${styles.btoyouby} row`}>
        <div className={`${styles.image} col`}>
          <img src="../public/images/image 31.png" alt="" />
        </div>
        <div className={`${styles.btoyoubyHeading} col`}>
          <img src="./public/images/logo.png" alt="logo" />
          <h1>
            Brought to you <br />
            <span>by DeFiPie</span>
          </h1>
          <p>
            DeFiPie is the first DeFi app to bring together crypto lending,
            staking, P2P loans, liquidity mining, and trading. We have a strong
            development and marketing team and an active, constantly growing
            community.
          </p>
          <p>
            Project incubation is a natural next step: now that we've done it
            ourselves, we want to help other quality projects to achieve
            success.
          </p>
        </div>
      </div>
    </>
  );
};

export default SideImage;
