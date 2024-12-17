import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

import hero1Img from './assets/images/hero1Img.png'
import arrow from './assets/svg/arrow.svg'
 
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay,Controller } from 'swiper/modules'

function App() { 

  return (
    <div className='w-full relative flex flex-col items-center max-w-[100%] overflow-x-hidden'> 

      <Navbar/>

      {/* hero */} 
      <section className="hero relative w-full flex_center h-[600px] lg:h-[400px]">
   
      <Swiper
      className='w-full h-full relative'
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 30000 }}
      modules={[Navigation, Pagination, Autoplay]}
    >
      <SwiperSlide className='swiper-slide'>
          
         <div className="containerSlide w-full h-full relative flex_center flex-wrap">

         <div className="aboutProduct relative h-[50%] lg:h-full w-full lg:w-[50%] flex_center text-white ">

            <div className="contentText w-[70%] max-w-[400px] h-auto flex flex-col gap-5 max-lg:items-center">
            
            <h1 className='font-bold largeFont'>Iphone 15 Pro Max</h1>
            
            <p className='font-light mediumFont max-lg:text-center'>The dimensions of the iPhone 16 Pro (Max) will probably be different</p>

            <button className='heroBtn flex_center font-bold w-[153px] h-[40px] rounded-full smallFont'>
            View Products
            </button>

            </div>
          </div>

          <div className="imageProduct relative h-[50%] lg:h-full w-full lg:w-[50%] flex_Items_center justify-center lg:justify-start">
            <img src={hero1Img} alt="hero" className='h-full w-auto object-contain'/>
          </div>

         </div>

      </SwiperSlide>

      <SwiperSlide>
        <img src="https://via.placeholder.com/600x300" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://via.placeholder.com/600x300" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>

    {/* <button className="custom_prev_btn">
        <img src="https://via.placeholder.com/40x40?text=Prev" alt="Previous" />
      </button>
      <button className="custom_next_btn">
        <img src="https://via.placeholder.com/40x40?text=Next" alt="Next" />
      </button> */}

      </section>

    </div>
  )
}

export default App
