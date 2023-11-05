import React from "react";

// Styles
import styles from "../styles/services.module.scss";

// Components
import Heading from "./Heading";

// Data
import { ServicesData } from "../data/fakeData";

// Images
import dot from "../assets/Images/dots.jpg";

const Services = () => {
  return (
    <div className={styles.Services} id="services">
      <div className={styles.Services_wrapper}>
        <Heading firstCharacter="Our" lastCharacter="Services" />
        <div className={styles.Services_boxs}>
          {ServicesData?.map((item, i) => {
            return (
              <div className={styles.Services_box} key={i}>
                <img src={dot} alt="dots" className={styles.dots} />
                <div className={styles.card_logo}>
                  <img src={item.logo} alt="Logo" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
