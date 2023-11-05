import React from "react";
// Styles
import styles from "../styles/contact.module.scss";

// Images

const Contact = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.contact_wrapper}>
        <div className={styles.contact_box}>
          <div className={styles.contact_box_left}>
            <div style={{ width: "100%" }}>
              <iframe
                width="100%"
                height="500px"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.maps.ie/distance-area-calculator.html"></a>
              </iframe>
            </div>
          </div>
          <div className={styles.contact_box_right}>
            <h1>Contact Us</h1>

            <div className={styles.inputs}>
              <div className={styles.input}>
                <label htmlFor="">Full name *</label>
                <input type="text" placeholder="Full name" required />
              </div>

              <div className={styles.input}>
                <label htmlFor="">Phone Number *</label>
                <input type="number" placeholder="Enter number" required />
              </div>
            </div>

            <div className={styles.input}>
              <label htmlFor="">Email *</label>
              <input type="email" placeholder="Enter Email" required />
            </div>

            <div className={styles.input}>
              <label htmlFor="">Message *</label>
              <textarea name="" id="" cols="30" rows="10" required></textarea>
            </div>

            <div className={styles.action}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
