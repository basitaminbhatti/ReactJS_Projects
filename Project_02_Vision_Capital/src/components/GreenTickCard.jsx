import React from "react";
import styles from "./GreenTickCard.module.css";

const GreenTickCard = ({
  projectTitle,
  projectHeading,
  projectSpan,
  projectPara,
  project_data,
}) => {
  return (
    <>
      <div className={styles.title}>
        <p className={styles.smalltitle}>{projectTitle}</p>
        <h1>
          {projectHeading}
          <span> {projectSpan}</span>
        </h1>
        <p>{projectPara}</p>
      </div>
      <div class={`${styles.projectsvisioncard} row row-cols-2`}>
        {project_data.map((item, index) => (
          <div
            key={index} // Make sure to provide a unique key for each element
            className={`${styles.projectsvisionli} col shadow p-3 mb-5 bg-body-tertiary rounded`}
          >
            <img
              src="../public/images/tickicon.png"
              alt="tickicon"
              width="24px"
              height="24px"
            />
            <li>
              <h4>{item.title}</h4>
              {item.description}
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default GreenTickCard;
