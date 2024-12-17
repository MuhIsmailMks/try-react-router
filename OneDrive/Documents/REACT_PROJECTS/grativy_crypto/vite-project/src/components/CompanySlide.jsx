import React from "react"; 

const CompanySlide = ({text, ceo, aboutFrom, companyLogo}) => {
  return (
    <div className="box flex_center flex-col w-[90%] lg:w-[35%] h-full text-center gap-4">
    <p className="text_medium font-light">
     {text}
    </p>
    <h5 className="mt-4 font-semibold text_xsmall">
      {ceo}
    </h5>

    <div className="flex_center gap-4">
      <p className="text_xsmall font-thin">{aboutFrom}</p>

      <span className="h-[30px] w-[1px] bg-white"></span>

      <img
        src={companyLogo}
        alt={companyLogo}
        className="h-[20px] w-auto object-contain"
      />

    </div>
  </div>
  );
};

export default CompanySlide;
