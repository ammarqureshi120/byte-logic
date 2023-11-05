import React from "react";

// Styles
import styles from "../styles/main.module.scss";

// Data
import { MainData } from "../data/fakeData";

const Main = () => {
  return (
    <div className={styles.main} id="home">
      <div className={styles.main_wrapper}>
        <div className={styles.main_content}>
          <h1>Business Technology</h1>
          <h3>that works!</h3>

          <p>
            We promise to keep your business connected with transparent and
            secure solutions. Backed by support that is responsive, reliable and
            local to the Dallas/Ft. Worth metroplex.
          </p>
        </div>

        <div className={styles.main_box}>
          <div className={styles.main_box_cards}>
            {MainData.map((item, index) => {
              return (
                <div className={styles.main_card} key={index}>
                  <div className={styles.main_card_top}>
                    <div className={styles.main_card_logo}>
                      <img src={item.logo} alt="" />
                    </div>
                    <h5>
                      {item.title}
                      <span> {item.subTitle}</span>
                    </h5>
                  </div>
                  <div className={styles.main_card_bottom}>
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
