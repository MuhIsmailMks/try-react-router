import React from "react";
import MarketContent from "../components/MarketContent";
import Partnert from "../components/Partnert";
import { motion } from "framer-motion";

const MarketPartnerts = () => {
  return (
    <section className="flex_center h-auto relative flex-col overflow-hidden ">
      {/* MARKET */}
      <div className="container flex_center relative flex-col gap-10 text-white w-[95%] mt-40 z-10">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="text_title "
        >
          Crypto Market Making
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }}
          className="font-light text_medium text-center w-full lg:w-[523px] "
        >
          we are a global crypto liquidity provider and algorithmic market
          maker, We trade digital assets listed on Centralized Exchanges in over
          15 countries worldwide.
        </motion.p>

        <div className="flex_center   flex-col w-full mt-10 gap-28 lg:gap-10 ">
          <MarketContent
            title={"Market Making for Crypto Project"}
            subTitle={
              "Accelerate your token's journey by boosting its liquidity"
            }
            text={` We invest in building long-term, sustainable relationships and
                support our projects in their growth journey with our services,
                industry expertise and network.`}
            imgSrc={"/images/cryptoMarket1.png"}
          />

          <MarketContent
            title={"Market Making for Crypto Exchanges"}
            subTitle={
              "Attract more traders and projects with deep order books & liquidity"
            }
            text={`Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance.`}
            imgSrc={"/images/cryptoMarket2.png"}
            flexRowReverse={true}
          />
        </div>
      </div>

      <div className="background  max-w-[2000px] absolute bottom-[30%] h-full w-full left-[50%] translate-x-[-50%] z-0   ">
        <img
          src="/images/bgMarket.png"
          alt=""
          className="w-[100vw] xl:w-[2200px] h-[200vw] xl:h-[2000px] object-cover absolute bottom-[20%] md:bottom-[-20%] xl:bottom-[-22%] xl:left-[-30%]  "
        />
      </div>

      {/* PARTNERTS */}
      <div className="container flex_center flex-wrap relative gap-10 text-white w-full lg:w-[95%] mt-40 z-10">
        <div className="title flex justify-start max-md:justify-center w-full md:w-[40%]">
          <motion.h3  initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true, amount: 1 }} className=" text-center md:text-left text-[58px]  leading-[1] ">
            Our Partnets <br /> & Friends
          </motion.h3>
        </div>

        <div className="contentContainer w-full md:w-[50%] flex_center  h-auto relative gap-4 md:gap-6 max-md:pr-0 max-lg:pr-10">
          <div className="leftCol flex_justifyCenter items-end flex-col gap-6 w-[50%] mb-6">
            <Partnert image={"/images/bitbank.png"} text={"ETBANK"} />

            <Partnert image={"/images/binance.png"} text={"BINANCE"} />
          </div>

          <div className="rightCol flex_justifyCenter items-start flex-col gap-6 w-[50%] mt-6">
            <Partnert image={"/images/bitstamp.png"} text={"BITSTAMP"} />

            <Partnert image={"/images/coinbase.png"} text={"COINBASE"} />
          </div>
        </div>

      </div>

      <div className="background  max-w-[2000px] absolute bottom-[5%] lg:bottom-[-8%] h-full w-full left-[50%] translate-x-[-50%] z-0 ">
        <img
          src="/images/middle-left.png"
          alt=""
          className="absolute w-[110%] md:w-[70%] lg:w-[60%] max-w-[1000px] ratioBox left-[-20%] bottom-[10%] lg:ottom-0 rotate-[-85deg]"
        />
      </div>

      <div className="backgroundAsset max-w-[2000px] absolute bottom-[20%] lg:bottom-[17%] left-[50%] translate-x-[-50%] w-full ratioBox">
        <div className="containerBg w-[150px] lg:w-[200px] ratioBox absolute left-[5%] bottom-0 flex_center  ">
          <img
            src="/images/near.png"
            alt=""
            className="ratioBox w-[50px] lg:w-[80px] object-contain absolute top-0"
          />
          <img
            src="/images/solana.png"
            alt=""
            className="ratioBox w-[50px] lg:w-[80px] object-contain absolute bottom-0 left-0"
          />
          <img
            src="/images/mena.png"
            alt=""
            className="ratioBox w-[50px] lg:w-[80px] object-contain absolute bottom-[12%] right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketPartnerts;
