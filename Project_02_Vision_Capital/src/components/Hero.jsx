import React from "react";
import styles from "../components/Hero.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <h1>Vision Capital</h1>
        <p>The right way to fund and incubate your DeFi startup</p>
        <div className="heroBtn">
        <button type="button" class="btn btn-primary btn-lg heroPrimaryBtn">
        I Need Funding
        </button>
        <button type="button" class="btn btn-secondary btn-lg heroSecondaryBtn">
        Become an Investor 
        </button>
        </div>       
      </div>
    </>
  );
};

export default Hero;
