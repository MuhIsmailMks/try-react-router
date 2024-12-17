     <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{
        clickable: true,
        renderCustom: (swiper, current, total) => {
          return `<div class="custom-pagination">
                    <span class="current">${current}</span> of 
                    <span class="total">${total}</span>
                  </div>`;
        }
      }}
      modules={[Pagination]}
    >
      <SwiperSlide>   <div className="min-w-[200px] w-[45%] lg:w-[30%] relative flex_itemsStartColmn gap-5">

            {/* image */}
            <div className="w-full rounded-2xl overflow-hidden flex_center">
              <Image
                  src="/images/deals1.webp"
                  alt="Logo"
                  width={1000}  
                  height={1000} 
                  className='object-contain w-full h-auto relative'
              />
              
              {/* about deals image */}
              <div className="absolute w-auto flex_center gap-4 left-3 lg:left-5 top-3 lg:top-5 h-auto font_super_small">
                <div className="relative rounded-3xl bg-[#1f4b43] py-2 lg:py-3 px-5 text-white">For Sale</div>
              </div>

            </div>

            {/* about deal */}
            <div className="w-full relative flex flex-col items-start gap-2">

              {/* name */}
              <h3 className="font_xl_large font-bold">Skyper Pool Apartment</h3>

              {/* location */}
              <div className="flex items-center gap-2">

              <Image
                src="/icons/location.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[25px] lg:w-[30px] h-auto'
                />

            <h2 className="font_super_small lg:font_medium">1020 Bloomingdale Ave</h2>
              </div>

              {/* information */}
              <div className="flex_between relative w-full mt-4 md:mt-10 border-t-[2px] border-t-[#dbdbdb] py-4 max-lg:flex-col">
                
                {/* about apart */}
                <div className="left flex items-center gap-4">
                  
                  {/* bed */}
                  <div className="flex_center gap-2 md:gap-3">
                  
                  <Image
                      src="/icons/bad.svg"
                      alt="bad"
                      width={0}  
                      height={0} 
                      className='object-contain w-[25px]'
                  />

                  <p className="font_super_small lg:font_medium font-bold">4</p>

                  </div>

                  {/* line */}
                  <div className="line h-[30px] w-[2px] bg-[#dbdbdb]"></div>

                  {/* bathroom */}
                  <div className="flex_center gap-2 md:gap-3">
                            
                  <Image
                      src="/icons/bathroom.svg"
                      alt="bathroom"
                      width={0}  
                      height={0} 
                      className='object-contain w-[25px]'
                  />

                  <p className="font_super_small lg:font_medium font-bold">2</p>

                  </div>

                  {/* line */}
                  <div className="line h-[30px] w-[2px] bg-[#dbdbdb]"></div>

                  {/* wide */}
                  <div className="flex_center gap-2 md:gap-3">
                  
                  <Image
                      src="/icons/wide.svg"
                      alt="wide"
                      width={0}  
                      height={0} 
                      className='object-contain w-[25px]'
                  />

                  <p className="font_super_small lg:font_medium font-bold">250</p>

                  </div>


                </div>

                {/* price */}
                <div className="right max-lg:mt-4">
                  <h3 className="text-[#eb664e] font_large font-bold">$280,000</h3>
                </div>

              </div>

            </div>

          </div> 
</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>