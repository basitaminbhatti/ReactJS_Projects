import React from "react";
import styles from "./Footer.module.css";
import {
  FaGithub,
  FaFacebook,
  FaTelegram,
} from "../../node_modules/react-icons/fa/";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className="row">
            <div className={`${styles.form} col`}>
              <div className="row">
                <h1>
                  <span>
                    Join <br />
                  </span>
                  Vision Capital and get funded
                </h1>
                <span>We'll get back to you within 24 hours</span>
                <div class="row g-3">
                  <div class="col-6">
                    <span className={styles.formsmall}>
                      How is your project called?
                    </span>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-6">
                    <span className={styles.formsmall}>Your Email</span>
                    <input type="Email" class="form-control" />
                  </div>
                  <div class="col-6">
                    <span className={styles.formsmall}>
                      Please tell us a few words about the project
                    </span>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-6">
                    <span className={styles.formsmall}>Telegram name</span>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div className={`${styles.buttonSpace} ${styles.FooterBtn}`}>
                  <button type="button" class="btn btn-primary btn-lg">
                    I Need Funding
                  </button>
                </div>
              </div>
            </div>

            <div className={`${styles.socialIcons} col`}>
              <h3>
                <FaGithub />
                <FaFacebook />
                <BsTwitterX />
                <FaTelegram />
              </h3>
              <div className={styles.links}>
                <a href="#">hello@visioncapital.com</a>
                <a href="#">Join us on Telegram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
