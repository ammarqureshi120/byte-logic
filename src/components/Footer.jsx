import React from "react";

// Styles
import styles from "../styles/footer.module.scss";

// Images
import Logo from "../assets/Images/logo.png";

// Icons
import { BiPhoneCall, BiLogoFacebook, BiMailSend } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_boxs}>
          <div className={`${styles.footer_box}`}>
            <div className={styles.footer_logo}>
              <img src={Logo} alt="" />
            </div>

            <h3>Follow us</h3>

            <div className={styles.footer_actions}>
              <div>
                <BiLogoFacebook />
              </div>
              <div>
                <AiOutlineTwitter />
              </div>
              <div>
                <AiOutlineInstagram />
              </div>
            </div>
          </div>

          <div className={styles.footer_box}>
            <h3>Quick Links</h3>

            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Sercices</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className={styles.footer_box}>
            <h3>information</h3>

            <div className={styles.footer_information}>
              <BiPhoneCall /> (817) 770-0060
            </div>

            <div className={styles.footer_information}>
              <BiMailSend /> info@yourdomain.com
            </div>
          </div>

          <div className={`${styles.footer_box} ${styles.footer_box2}`}>
            <h5>Subscribe to our Newsletter</h5>
            <p>We'll keep you posted with news and updates!</p>

            <div className={styles.footerInput}>
              <input type="text" placeholder="Enter your email." />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_bottom}>
        <div className={styles.footer_bottom_wrapper}>
          <p>Copyright © 2023 byteLogik | DFW IT Services</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
