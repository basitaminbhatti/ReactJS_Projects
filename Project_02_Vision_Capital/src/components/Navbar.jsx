import React from "react";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <>
        <nav>
          <div className={styles.logo}>
            <img src="./public/images/logo.png" alt="logo" />
            <h1>Vision Capital</h1>
          </div>
          
          <div className={styles.NavBtn}>
            <a href="#">For Projects</a>
            <a href="#">For Investors</a>
            <button type="button" className="btn btn-primary heroPrimaryBtn">
              Join Now
            </button>
          </div>
        </nav>
    </>
  );
};

export default Navbar;
