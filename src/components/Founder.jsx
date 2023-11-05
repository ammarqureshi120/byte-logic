import React from "react";

// Styles
import styles from "../styles/founder.module.scss";

// Images
import founderImage from "../assets/Images/service.png";

const Founder = () => {
  return (
    <div className={styles.founder}>
      <div className={styles.founder_wrapper}>
        <div className={styles.founder_left}>
          <img src={founderImage} alt="" />
        </div>
        <div className={styles.founder_right}>
          <h1>
            <span>Our</span> Founder
          </h1>

          <p>
            “Since 2002, we’ve been helping businesses in Texas harness the
            latest technology. byteLogik was developed to offer a one-stop shop
            for businesses to get what they need. Our goal is to keep you
            connected to the things that matter to you, delivered through a high
            quality and dynamic customer experience at competitive pricing.
          </p>

          <h5>
            You have my personal commitment to excellence on behalf of our
            staff.”{" "}
          </h5>

          <button>Discover More</button>
        </div>
      </div>
    </div>
  );
};

export default Founder;
