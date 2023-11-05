import React, { useRef } from "react";

// Styles
import styles from "../styles/reviews.module.scss";
import Heading from "./Heading";

// Icons
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { ReviewsData } from "../data/fakeData";

const Reviews = () => {
  const swiperRef = useRef(null);

  const handleLeftNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleRightNavigation = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className={styles.reviews}>
      <Heading firstCharacter="Client" lastCharacter="Testimonials" />
      <div className={styles.reviews_wrapper}>
        <Swiper
          className="mySwiper"
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {ReviewsData.map((item, i) => {
            return (
              <SwiperSlide key={i} className={styles.review_cards}>
                <div className={styles.review_logo}>
                  <img src={item.logo} alt="logo" />
                </div>
                <h5>{item.title}</h5>
                <h4>{item.subTitle}</h4>
                <p>{item.description}</p>

                <div className={styles.stars}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={styles.swiper_action}>
          <div className={styles.swiper_left} onClick={handleLeftNavigation}>
            <MdKeyboardArrowLeft />
          </div>
          <div className={styles.swiper_right} onClick={handleRightNavigation}>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
