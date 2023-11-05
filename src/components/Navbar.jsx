import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Styles
import styles from "../styles/navbar.module.scss";

// Icons
import { BiPhoneCall, BiLogoFacebook, BiMailSend } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";

// Images
import Logo from "../assets/Images/logo.png";

const Navbar = () => {
  // Sticky Navbar Start
  const [isToogle, setIsToggle] = useState(false);
  const [stickyNavbar, setStickyNavbar] = useState(false);
  const ChangeNav = () => {
    if (window.scrollY >= 60) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ChangeNav);

    return () => {
      window.removeEventListener("scroll", ChangeNav);
    };
  }, [stickyNavbar]);
  // Sticky Navbar End

  const handleClick = () => {
    setIsToggle(!isToogle);
  };

  return (
    <div
      className={`${styles.navbar_main} ${stickyNavbar && styles.navbarSticky}`}
    >
      {/*   navbar_top   */}
      <div className={styles.navbar_top}>
        <div className={styles.navbar_top_wrapper}>
          <div className={styles.navbar_top_left}>
            <div>
              <BiPhoneCall /> (817) 770-0060
            </div>

            <div>
              <BiMailSend /> info@yourdomain.com
            </div>
          </div>
          <div className={styles.navbar_top_right}>
            <h6>Social Connect</h6>
            <div>
              <BiLogoFacebook />
              <AiOutlineTwitter />
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className={styles.navbar}>
        <div className={styles.navbar_wrapper}>
          <div className={styles.navbar_logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div
            className={`${styles.navbar_menu}  ${
              isToogle && styles.navbar_menuActive
            }`}
          >
            <ul>
              <Link
                to="home"
                smooth={true}
                span={true}
                spy={true}
                activeClass="active"
                onClick={() => setIsToggle(false)}
              >
                <li>Home</li>
              </Link>

              <Link
                to="services"
                smooth={true}
                span={true}
                onClick={() => setIsToggle(false)}
              >
                <li>Servies</li>
              </Link>

              <Link
                to="contact"
                smooth={true}
                span={true}
                onClick={() => setIsToggle(false)}
              >
                <li>Contact us</li>
              </Link>
            </ul>

            <div className={styles.navbar_action}>
              <button>Book an Appointment</button>
            </div>

            <div className={styles.navbar_hanburgerMenu} onClick={handleClick}>
              <div
                className={`handburgerMenu ${isToogle && "handburgerActive"}`}
              >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
