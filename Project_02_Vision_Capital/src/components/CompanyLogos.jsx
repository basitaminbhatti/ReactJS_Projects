import React from "react";
import styles from "../components/CompanyLogos.module.css";

const CompanyLogos = ({ imageFilenames, Company_title }) => {
    
  return (
    <>
      <div className={`${styles.CompanyLogos} text-center`}>
        <div className={styles.CompanyLogosHeading}>
          <span className={styles.hr}></span>
          <p>{Company_title}</p>
          <span className={styles.hr}></span>
        </div>

        <div className="row">
        {imageFilenames.map((filename, index) => (
        <div key={index} className="col">
          <img src={`../public/images/${filename}`} alt={`Image ${index + 26}`} />
        </div>
      ))}
        </div>
      </div>
    </>
  );
};

export default CompanyLogos;
