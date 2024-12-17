import React, { useRef } from "react";
import CompanySlide from "../components/CompanySlide";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Company = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="flex_center h-auto relative flex-col overflow-hidden">
      <div className="container flex_center relative flex-col gap-10 text-white w-[95%] mt-40 z-10">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="text_title "
        >
          We are in a good company
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="font-light text_medium text-center w-full lg:w-[523px] "
        >
          Our partnerships have delivered great value to our projects and we're
          happy to share some of their feedback below
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="sliderContainer w-full flex_center flex-col"
        >
          {/* swiper button */}
          <div className="relative w-full h-auto flex_center gap-[20%] lg:gap-6">
            <button ref={prevRef} className="custom-button prev-button">
              <img src="/images/icons/nextPrevButton.svg" alt="Prev"  className="w-[60px] h-auto object-contain mirrorImg"/>
            </button>
            <button ref={nextRef} className="custom-button next-button">
              <img src="/images/icons/nextPrevButton.svg" alt="Next" className="w-[60px] h-auto object-contain"/>
            </button>
          </div>

          {/* swiper content */}
          <Swiper
            className="swiperSliderContainer w-full h-[420px] md:h-[350px] lg:h-[500px]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            loop={true}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
          >
            <SwiperSlide className="swiper-slider">
              <CompanySlide
                text={`Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.`}
                ceo={"Atthakrit Chimplapibul"}
                aboutFrom={"Co-founder & CEO of Bitkub"}
                companyLogo={"/images/bitkub-logo.png"}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <CompanySlide
                text={`Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.`}
                ceo={"Atthakrit Chimplapibul"}
                aboutFrom={"Co-founder & CEO of Bitkub"}
                companyLogo={"/images/bitkub-logo.png"}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <CompanySlide
                text={`Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.`}
                ceo={"Atthakrit Chimplapibul"}
                aboutFrom={"Co-founder & CEO of Bitkub"}
                companyLogo={"/images/bitkub-logo.png"}
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slider">
              <CompanySlide
                text={`Since 2019, Gravity team has been an astounding market maker for Bitkub. They have proven themselves to be one of the most consistent, committed and driven market makers on our exchange. Gravity Team has contributed high-quality volume and has proven to be very reliable and trustworthy partner. We strongly advocate Gravity Team as they have been an indispensable part of our market-making team.`}
                ceo={"Atthakrit Chimplapibul"}
                aboutFrom={"Co-founder & CEO of Bitkub"}
                companyLogo={"/images/bitkub-logo.png"}
              />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

// →
//
//

export default Company;
