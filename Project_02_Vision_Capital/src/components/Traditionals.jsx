import React from "react";
import styles from "../components/Traditionals.module.css";

const Traditionals = () => {
  const data = [
    "Without a big budget, it's hard to approach venture investors",
    "VCs don't care about your DeFi idea – only their gains",
    "They force you into selling your tokens at a huge discount…",
    "...Then dump them at the first opportunity",
    "Result: your token collapses. Everyone goes home.",
  ];
  return (
    <>
      <div className={styles.traditionals}>
        <div className="row">
          <div className="col">
            <h1 className={styles.trendHeading}>
              Traditional Fundraising <span>Doesn't Work</span> in DeFi
            </h1>
          </div>
          <div className="col">
            {data.map((item, index) => (
              <div
                key={index} // Make sure to provide a unique key for each element
                className={`${styles.liCustom} col shadow p-3 mb-5 bg-body-tertiary rounded`}
              >
                <li>
                  <h4>{String(index + 1).padStart(2, "0")}</h4>
                  {item}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Traditionals;
