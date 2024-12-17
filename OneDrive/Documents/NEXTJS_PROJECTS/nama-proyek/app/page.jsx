'use client'

import Image from "next/image"; 
import Navbar from "./components/Navbar";   
import Hero from "./components/Hero";
import {CategoryCard, DealsContainer, AboutCities} from "./components/ComponentsContainer";  
 
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';  
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (

    <main className="w-full h-auto relative flex flex-col items-center">
     
     {/* hero and navbar */}
      <section className="hero bg-[#1A1A1A] flex flex-col items-center h-auto ">
        
        {/* bg gradient */}
        <span className="z-0 absolute hero_gradient left-[10%] top-[10%] w-[100px] h-[100px] rounded-full"></span>

        {/* navbar */}
        <Navbar/> 

        {/* hero */}
        <Hero/> 

        
      </section>

     {/* how it work */}
     <section className="h-auto   flex_col_center gap-10 ">
      
      {/* title */}
      <div className="title w-full relative flex_center flex-col gap-3 text-center px-4">
        <h2 className="font_title leading-[1] font-bold">How It works? Find a perfect home</h2>
        <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      {/* how step */}
      <div className="w-full relative flex_center flex-wrap gap-10 xl:gap-28">

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork1.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Find Real Estate</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork2.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Meet Relator</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork3.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Take The Keys</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

      </div>

     </section>

     {/* categories */}
     <section className="h-auto flex_col_center gap-10 ">
      
      {/* top section */}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Featured Categories</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Categories</p>

            <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>
      
      {/* categories */}
      <div className="w-full relative flex_center flex-wrap gap-10 xl:gap-6 min-[1400px]:gap-10  min-[1800px]:gap-28 px-2">

      <CategoryCard 
        iconSrc="/icons/categori1.svg"
        title="Town House"
        properties={2}
      />

      <CategoryCard 
        iconSrc="/icons/categori2.svg"
        title="Modern Villa"
        properties={10}
      />
      <CategoryCard 
        iconSrc="/icons/categori3.svg"
        title="Apartment"
        properties={3}
      />
      <CategoryCard 
        iconSrc="/icons/categori4.svg"
        title="Office"
        properties={3}
      />
      <CategoryCard 
        iconSrc="/icons/categori5.svg"
        title="Single Family"
        properties={5}
      />
      <CategoryCard 
        iconSrc="/icons/categori6.svg"
        title="Shop House"
        properties={2}
      />

      </div>

     </section>
     
     {/* deals */}
     <section className="h-auto flex_col_center gap-10  ">
      
        {/* top section */}
        <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
          
          {/* title */}
            <div className="flex flex-col max-lg:gap-4">
              <h2 className="font_title leading-[1] font-bold">Discover Our Best Deals</h2>
              <p className="font_normal sub_title">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

              <p className="font-bold">View All Properties</p>

              <Image
                  src="icons/arrow.svg"
                  alt="arrow"
                  width={0}  
                  height={0} 
                  className='object-contain w-[20px] h-auto'
              />

            </div>

        </div>
        
        {/* deals container */}
        <div className="flex_center relative w-full h-auto">

        <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="max-w-[1900px]" 
        slidesPerView={3}
        breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }} 
      pagination={{ clickable: true }} 
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={(i) => console.log('slide change')}
    >
      <SwiperSlide>

        <DealsContainer
        imageSrc={'/images/deals1.webp'}
        title='Skyper Pool Apartment'
        location='1020 Bloomingdale Ave'
        bed='4'
        bathroom='2'
        wide='450'
        price='$280,000'
        aboutDeals='For Sale'
        />

      </SwiperSlide>
      <SwiperSlide>
        
        
      <DealsContainer
        imageSrc={'/images/deals2.webp'}
        title='North Dillard Street'
        location='4330 Bell Shoals Rd'
        bed='4'
        bathroom='2'
        wide='400'
        price='$250'
        isRent={true}
        aboutDeals='For Rent'
        />

      </SwiperSlide>

      <SwiperSlide>

          <DealsContainer
            imageSrc={'/images/deals3.webp'}
            title='Eaton Garth Penthouse'
            location='7722 18th Ave, Brooklyn'
            bed='4'
            bathroom='2'
            wide='450'
            price='$180,000'
            aboutDeals='For Sale'
            isFeatured={true}
            />

      </SwiperSlide>

      <SwiperSlide>Slide 4</SwiperSlide>

      <SwiperSlide>Slide 5</SwiperSlide>

      <SwiperSlide>Slide 6</SwiperSlide>
     
       </Swiper>
          
        </div>

     </section>


     {/* number */}
     <section className="w-full  relative h-auto flex_center">

        <div className="bg_secondary rounded-xl w-[90%] h-auto lg:h-[300px] max-w-[2000px] flex_between px-4 lg:px-6 min-[1700px]:px-20 flex-col lg:flex-row max-lg:py-4 max-lg:text-center gap-10">
          
          <div className="flex_itemsStartColmn">
            <h4 className="font-bold font_title">Take a look at our numbers</h4>
            <p className="font_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center gap-5 min-[1600px]:gap-10  flex-wrap">

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>99%</p>
              <p className="font_small">Customer satisfaction</p>
            </div>

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>50M+</p>
              <p className="font_small">In property sales</p>
            </div>

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>2,600+</p>
              <p className="font_small">Successful sales</p>
            </div>

          </div>

        </div>

     </section>
     
     {/* find the properties */}
     <section className="w-full flex_center  flex-col gap-20">

      {/* top section and title*/}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Find Properties in These Cities</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Cities</p>

            <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>

      {/* content  container */}
      <div className="flex_center flex-wrap relative w-full gap-2 sm:gap-4 h-auto lg:h-[500px] min-[1600px]:h-[668px] max-w-[1900px]">
        
        {/* column 1 */}
        <div className="min-w-[200px] w-[47%] lg:w-[28%] h-[370px] lg:h-full rounded-2xl overflow-hidden flex_center relative">
        
          {/* image */}
          <Image
                  src="/images/cities1.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />

          {/* about cities */} 
          <AboutCities
            properties='8'
            cities='New York'
          />

        </div>

        {/* column 2 */}
        <div className="min-w-[200px] w-[47%] lg:w-[28%] h-[370px] lg:h-full  overflow-hidden flex justify-between items-center flex-col relative max-[400px]:flex-row max-[400px]:w-full max-[400px]:justify-center max-[400px]:gap-4 max-[400px]:h-[200px]">
        
        {/* content 1 */}
        <div className="relative w-full rounded-2xl h-[48%] overflow-hidden flex_center max-[400px]:w-[47%] max-[400px]:h-full">
            {/* image */}
            <Image
                  src="/images/cities2.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='2'
            cities='Chicago'
          />

        </div>
 
        
        {/* content 2 */}
        <div className="relative w-full rounded-2xl h-[48%] overflow-hidden flex_center max-[400px]:w-[47%] max-[400px]:h-full">
       
            {/* image */}
          <Image
                  src="/images/cities4.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='0'
            cities='San Diego'
          />

        </div>
 

        </div>

        {/* column 3 */}
        <div className="min-w-[200px] w-[98%] lg:w-[28%] h-[200px] lg:h-full  overflow-hidden flex justify-center lg:justify-between items-center flex-col max-lg:flex-row max-lg:gap-4 relative">
        
        {/* content 1 */}
        <div className="relative w-[48%] lg:w-full rounded-2xl h-full lg:h-[48%] overflow-hidden flex_center">
            {/* image */}
            <Image
                  src="/images/cities3.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='1'
            cities='Los Angeles'
          />

        </div> 
        
        {/* content 2 */}
        <div className="relative w-[48%] lg:w-full rounded-2xl h-full lg:h-[48%] overflow-hidden flex_center">
       
            {/* image */}
          <Image
                  src="/images/cities5.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='3'
            cities='Florida'
          />

        </div>
 

        </div>
        
      </div>

     </section>

     {/* clients */}
     <section className="w-full flex_center flex-col gap-6">
        
        <h3 className="text-center font_normal">Thousands of world’s leading companies trust Space</h3>

        <div className="w-full flex_center gap-14 flex-wrap px-7">
        
          <a href="#amazon" className="relative">
              <Image
              src='/images/amazon.webp'
              alt='amazon'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#amd" className="relative">
              <Image
              src='/images/amd.webp'
              alt='amd'
              width={1000}  
              height={1000} 
              className='object-contain w-[90px] h-auto relative'
          />
          </a>
        
          <a href="#cisco" className="relative">
              <Image
              src='/images/cisco.webp'
              alt='cisco'
              width={1000}  
              height={1000} 
              className='object-contain w-[90px] h-auto relative'
          />
          </a>
        
          <a href="#dropcam" className="relative">
              <Image
              src='/images/dropcam.webp'
              alt='dropcam'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#logitech" className="relative">
              <Image
              src='/images/logitech.webp'
              alt='logitech'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#spotify" className="relative">
              <Image
              src='/images/spotify.webp'
              alt='spotify'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>

        </div>

     </section>

      {/* deals */}
      <section className="h-auto flex_col_center gap-10  bg-[#1f4b43] text-white py-36">
      
      {/* top section */}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Discover Our Best Deals</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Properties</p>

            <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>
      
      {/* deals container */}
      <div className="flex_center relative w-full h-auto deals2">

      <Swiper 
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      className="max-w-[2900px]" 
      // slidesPerView={4}
      breakpoints={{
      0: {
        slidesPerView: 2,
      },
      400: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    }} 
    pagination={{ clickable: true }} 
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={(i) => console.log('slide change')}
  >
    <SwiperSlide>

      <DealsContainer
      imageSrc={'/images/deals1.webp'}
      title='Skyper Pool Apartment'
      location='1020 Bloomingdale Ave'
      bed='4'
      bathroom='2'
      wide='450'
      price='$280,000'
      aboutDeals='For Sale'
      isWhiteIcon={true} 
      />

    </SwiperSlide>
    <SwiperSlide>
      
      
    <DealsContainer
      imageSrc={'/images/deals2.webp'}
      title='North Dillard Street'
      location='4330 Bell Shoals Rd'
      bed='4'
      bathroom='2'
      wide='400'
      price='$250'
      isRent={true}
      aboutDeals='For Rent'
      isWhiteIcon={true} 
      />

    </SwiperSlide>

    <SwiperSlide>

        <DealsContainer
          imageSrc={'/images/deals3.webp'}
          title='Eaton Garth Penthouse'
          location='7722 18th Ave, Brooklyn'
          bed='4'
          bathroom='2'
          wide='450'
          price='$180,000'
          aboutDeals='For Sale'
          isFeatured={true}
          isWhiteIcon={true} 
          />

    </SwiperSlide>

    <SwiperSlide>

<DealsContainer
  imageSrc={'/images/deals3.webp'}
  title='Eaton Garth Penthouse'
  location='7722 18th Ave, Brooklyn'
  bed='4'
  bathroom='2'
  wide='450'
  price='$180,000'
  aboutDeals='For Sale'
  isFeatured={true}
  isWhiteIcon={true} 
  />

    </SwiperSlide>

    <SwiperSlide>

    <DealsContainer
      imageSrc={'/images/deals3.webp'}
      title='Eaton Garth Penthouse'
      location='7722 18th Ave, Brooklyn'
      bed='4'
      bathroom='2'
      wide='450'
      price='$180,000'
      aboutDeals='For Sale'
      isFeatured={true}
      isWhiteIcon={true} 
      />

    </SwiperSlide>

    <SwiperSlide>

    <DealsContainer
      imageSrc={'/images/deals3.webp'}
      title='Eaton Garth Penthouse'
      location='7722 18th Ave, Brooklyn'
      bed='4'
      bathroom='2'
      wide='450'
      price='$180,000'
      aboutDeals='For Sale'
      isFeatured={true}
      isWhiteIcon={true} 
      />

    </SwiperSlide>
      
     </Swiper>
        
      </div>

     </section>

      {/* meet our tean */}
      <section className="h-auto   flex_col_center gap-10 ">
      
        {/* title */}
        <div className="title w-full relative flex_center flex-col gap-3 text-center px-4">
          <h2 className="font_title leading-[1] font-bold">Meet Our Team Of Experts</h2>
          <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* teams */}
       <div className="relative w-full flex_center gap-7 flex-wrap">
        
        {/* person 1 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">John Powell</p>
            <p className="font_small">Service Support</p>
          </div>
       
        </div>
        
        {/* person 2 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team2.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Thomas Powell</p>
            <p className="font_small">Marketing</p>
          </div>
       
        </div>
        
        {/* person 3 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team3.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Tom Wilson</p>
            <p className="font_small">Designer</p>
          </div>
       
        </div>
        
        {/* person 4 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team4.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Samuel Palmer</p>
            <p className="font_small">Marketing</p>
          </div>
       
        </div>

       </div>

     </section>

     {/* work with us */}
     <section className="relative w-full h-auto flex_center max-w-[2000px] flex-col lg:flex-row max-lg:gap-8">

      {/* image */}
      <div className="w-full md:w-1/2 flex_center relative">
      <Image
            src='/images/workImage.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />
      </div>

      {/* about work */}
      <div className="w-full lg:w-1/2 flex_center relative ">

      <div className=" w-[90%] md:w-[80%] min-[1800px]:w-[70%] flex flex-col items-start gap-6 max-lg:items-center">

        <div className="title w-full relative   text-left ">
          <h2 className="font_title leading-[1.1] font-bold">Why You Should Work
          With Us</h2> 
        </div>

        <p className="font_medium">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</p>

        <div className="w-full flex justify-between  ">
          
          <div className="w-[45%] ">
            <h2 className="font-bold font_large mb-4">Buy or Rent Homes</h2>
            <p className="leading-[1.2] md:leading-[1.7] font_small">We sell your home at the best market
            price and very quickly as well.</p>
          </div>
          
          <div className="w-[45%] ">
            <h2 className="font-bold font_large mb-4">Trusted by Thousands</h2>
            <p className="leading-[1.2] md:leading-[1.7] font_small">We offer you free consultancy to get a
            loan for your new home.</p>
          </div>

        </div>

        <button className="bg_secondary rounded-xl px-7 py-3 flex_center gap-3 duration-200 hover:opacity-80">
          <span className="font_small font-bold">Learn More</span>
          <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[15px] h-auto'
            />
        </button>

      </div>

      </div>

     </section>

     {/* testimonials */}
     <section className="bg-[#1a1a1a] flex_center gap-8">
        
        <div className="testimoni_container">
            
        </div>

     </section>

    </main>
  );
}
