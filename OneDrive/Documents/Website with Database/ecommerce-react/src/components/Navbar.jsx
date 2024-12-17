import React,{useState, useEffect} from 'react'


import iconWeb from '../assets/svg/iconWeb.svg'
import account from '../assets/svg/account.svg'
import bag from '../assets/svg/bag.svg'
import notification from '../assets/svg/notification.svg'



import home from '../assets/svg/homeIcon.svg'
import product from '../assets/svg/productIcon.svg'
import wishlist from '../assets/svg/wishlistIcon.svg'
import contact from '../assets/svg/contactIcon.svg'

// https://chatgpt.com/c/673afdd6-b270-8011-a605-69ae27a92e0f link for router

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggle = () => {
      setIsActive(!isActive); 
    };

  return (
    <nav className='w-full relative h-[101px] flex items-center justify-between lg:justify-center  globalPaddingX border-b-2 border-black'>

      {/* logo mobile */}
      <div className="relative flex_center lg:hidden z-[999]">

      <div className={`logoMobile flex items-end justify-center ${isActive ? 'active' : ''}`}>

            <span className='w-[50px] relative flex_center'>
            <svg className='w-full h-auto' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.3788 20C38.8265 20 40.0177 21.1785 39.8285 22.6137C39.4292 25.6426 38.3396 28.5519 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65491 36.9392 5.85786 34.1421C3.06081 31.3451 1.156 27.7814 0.384294 23.9018C-0.38741 20.0222 0.00865672 16.0009 1.52241 12.3463C3.03616 8.69181 5.59961 5.56824 8.8886 3.37061C11.4481 1.66043 14.3574 0.570766 17.3863 0.17151C18.8215 -0.0176778 20 1.17354 20 2.62118C20 4.06881 18.8174 5.21874 17.3925 5.47453C15.4025 5.83176 13.4976 6.59587 11.8011 7.72947C9.37421 9.35106 7.48269 11.6559 6.36572 14.3525C5.24874 17.0491 4.95649 20.0164 5.52592 22.8791C6.09535 25.7418 7.50088 28.3713 9.56477 30.4352C11.6287 32.4991 14.2582 33.9047 17.1209 34.4741C19.9836 35.0435 22.9509 34.7513 25.6475 33.6343C28.3441 32.5173 30.6489 30.6258 32.2705 28.1989C33.4041 26.5024 34.1682 24.5975 34.5255 22.6075C34.7813 21.1826 35.9312 20 37.3788 20Z" fill="black"/>
            <path d="M31.4307 20C32.8497 20 34.0239 18.8401 33.7649 17.4449C33.252 14.6819 31.9146 12.1156 29.8995 10.1005C27.274 7.475 23.713 6 20 6C16.287 6 12.726 7.475 10.1005 10.1005C8.08536 12.1156 6.74798 14.6819 6.23507 17.4449C5.97609 18.8401 7.15033 20 8.56934 20C9.98835 20 11.1028 18.8262 11.5086 17.4664C11.9254 16.0694 12.6845 14.7837 13.7341 13.7341C15.3959 12.0723 17.6498 11.1387 20 11.1387C22.3502 11.1387 24.6041 12.0723 26.2659 13.7341C27.3155 14.7837 28.0746 16.0694 28.4914 17.4664C28.8972 18.8262 30.0117 20 31.4307 20Z" fill="black"/>
            <path d="M25 20C26.6569 20 28.0509 21.3885 27.4441 22.9302C27.2358 23.4592 26.9708 23.9671 26.6518 24.4446C25.7727 25.7602 24.5233 26.7855 23.0615 27.391C21.5997 27.9965 19.9911 28.155 18.4393 27.8463C16.8874 27.5376 15.462 26.7757 14.3431 25.6569C13.2243 24.538 12.4624 23.1126 12.1537 21.5607C11.845 20.0089 12.0035 18.4003 12.609 16.9385C13.2145 15.4767 14.2398 14.2273 15.5554 13.3482C16.0329 13.0292 16.5408 12.7642 17.0698 12.5559C18.6115 11.9491 20 13.3431 20 15V17C20 18.6569 21.3431 20 23 20H25Z" fill="black"/>
            </svg>

            </span>

            <p className='kronaFont text-[1rem]'>Adget Zone</p>
      </div>

      </div>

      {/* navbar in desktop and menu in mobile */}
     <div className={`innerContainer globalMaxWidth w-full md:w-[50%] lg:w-full lg:h-full absolute lg:relative flex_center  lg:justify-between  top-0   max-lg:flex-col max-lg:bg-[#2F1A75] max-lg:pt-[120px] gap-6 max-lg:px-4 ${isActive ? 'active' : ''} md:rounded-bl-[20px]`}>

        <div className="logo flex items-end justify-center max-lg:hidden">
            <img src={iconWeb} alt="" />
            <p className='kronaFont text-[1rem]'>Adget Zone</p>
        </div>

        <ul className='flex_center gap-7 links max-lg:flex-col max-lg:w-full'>

            <li className='max-lg:w-full flex_Items_center gap-4'>

              <a href="" className='active   flex_Items_center gap-4'>
                <img src={home} alt="home icon" className='w-[28px] h-auto object-contain lg:hidden' />

                <span>Home</span>
              </a>
            
            </li>

            <li className='max-lg:w-full flex_Items_center gap-4'>
               

             <a href="" className=' flex_Items_center gap-4'>

                <img src={product } alt="Products icon" className='w-[27px] h-auto object-contain lg:hidden' />

                <span>Products</span>

              </a>  

            </li>

            <li className='max-lg:w-full flex_Items_center gap-4'>
             
              <a href="" className='flex_Items_center gap-4'>
                <img src={contact} alt="contact icon" className='w-[25px] h-auto object-contain lg:hidden' />

                <span>Contact us</span>
              </a>

            </li> 


            <li className='max-lg:w-full flex_Items_center gap-4'>
               
              <a href="" className='flex_Items_center gap-4'>
                <img src={wishlist} alt="wishlist icon" className='w-[27px] h-auto object-contain lg:hidden' />

                <span>Wishlist</span>
              </a>
            
            </li> 

        </ul>

        <div className='flex_center gap-3 max-lg:flex-col max-lg:w-full max-lg:py-6'>

            <button className='w-[42px] h-[42px] flex_center bg-black rounded-full max-lg:bg-transparent max-lg:w-full max-lg:justify-start'> 
             
              {/* icon */}
                <span className='w-[20px] lg:w-[17.92px] h-auto object-contain relative flex_center navBarIcon'>
                <svg className='w-full h-auto' viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.88001 19.12C1.56268 19.12 1.29687 19.0125 1.08257 18.7974C0.86828 18.5824 0.76076 18.3166 0.760014 18C0.759267 17.6834 0.866787 17.4176 1.08257 17.2026C1.29836 16.9875 1.56417 16.88 1.88001 16.88H3.00001V9.04C3.00001 7.49067 3.46668 6.11419 4.40001 4.91056C5.33335 3.70694 6.54668 2.91808 8.04001 2.544V1.76C8.04001 1.29334 8.20353 0.896858 8.53057 0.570564C8.85761 0.244271 9.25409 0.080751 9.72001 0.0800044C10.1859 0.0792577 10.5828 0.242778 10.9106 0.570564C11.2384 0.898351 11.4015 1.29483 11.4 1.76V2.544C12.8933 2.91734 14.1067 3.70619 15.04 4.91056C15.9733 6.11494 16.44 7.49142 16.44 9.04V16.88H17.56C17.8773 16.88 18.1435 16.9875 18.3586 17.2026C18.5736 17.4176 18.6808 17.6834 18.68 18C18.6793 18.3166 18.5717 18.5828 18.3575 18.7986C18.1432 19.0144 17.8773 19.1215 17.56 19.12H1.88001ZM9.72001 22.48C9.10401 22.48 8.57687 22.2609 8.13857 21.8226C7.70028 21.3843 7.48076 20.8568 7.48001 20.24H11.96C11.96 20.856 11.7409 21.3835 11.3026 21.8226C10.8643 22.2616 10.3368 22.4808 9.72001 22.48Z" fill="white"/>
</svg>

                </span>

                {/* text */}
                <p className='text-white text-[16px] pl-4 lg:hidden'>Notification</p>

            </button>

            <button className='w-[42px] h-[42px] flex_center bg-black rounded-full max-lg:bg-transparent max-lg:w-full max-lg:justify-start '>
              
              {/* icon */}
               <span className='w-[20px] lg:w-[17.92px] h-auto object-contain relative flex_center navBarIcon'>
               
               <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M9.72001 9.71999C8.48801 9.71999 7.43334 9.28133 6.55601 8.40399C5.67868 7.52666 5.24001 6.47199 5.24001 5.23999C5.24001 4.00799 5.67868 2.95333 6.55601 2.07599C7.43334 1.19866 8.48801 0.759995 9.72001 0.759995C10.952 0.759995 12.0067 1.19866 12.884 2.07599C13.7613 2.95333 14.2 4.00799 14.2 5.23999C14.2 6.47199 13.7613 7.52666 12.884 8.40399C12.0067 9.28133 10.952 9.71999 9.72001 9.71999ZM0.76001 18.68V15.544C0.76001 14.9093 0.92353 14.3262 1.25057 13.7946C1.57761 13.2629 2.01142 12.8567 2.55201 12.576C3.70934 11.9973 4.88534 11.5635 6.08001 11.2746C7.27468 10.9856 8.48801 10.8407 9.72001 10.84C10.952 10.8392 12.1653 10.9841 13.36 11.2746C14.5547 11.565 15.7307 11.9988 16.888 12.576C17.4293 12.856 17.8635 13.2622 18.1906 13.7946C18.5176 14.3269 18.6808 14.9101 18.68 15.544V18.68H0.76001Z" fill="white"/>
               </svg>


              </span>

                 {/* text */}
                 <p className='text-white text-[16px] pl-4 lg:hidden'>Account</p>

            </button>

            <button className='w-[42px] h-[42px] flex_center bg-black rounded-full max-lg:bg-transparent max-lg:w-full max-lg:justify-start '>

              {/* icon */}
              <span className='w-[20px] lg:w-[17.92px] h-auto object-contain relative flex_center navBarIcon'>
               
            <svg width="19" height="23" viewBox="0 0 19 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.44 4.56H14.2C14.2 2.0848 12.1952 0.0800018 9.72001 0.0800018C7.24481 0.0800018 5.24001 2.0848 5.24001 4.56H3.00001C1.76801 4.56 0.76001 5.568 0.76001 6.8V20.24C0.76001 21.472 1.76801 22.48 3.00001 22.48H16.44C17.672 22.48 18.68 21.472 18.68 20.24V6.8C18.68 5.568 17.672 4.56 16.44 4.56ZM9.72001 2.32C10.952 2.32 11.96 3.328 11.96 4.56H7.48001C7.48001 3.328 8.48801 2.32 9.72001 2.32ZM16.44 20.24H3.00001V6.8H5.24001V9.04C5.24001 9.656 5.74401 10.16 6.36001 10.16C6.97601 10.16 7.48001 9.656 7.48001 9.04V6.8H11.96V9.04C11.96 9.656 12.464 10.16 13.08 10.16C13.696 10.16 14.2 9.656 14.2 9.04V6.8H16.44V20.24Z" fill="white"/></svg>

              </span>

                {/* text */}
                <p className='text-white text-[16px] pl-4 lg:hidden'>Bag</p>

            </button>

        </div>

     </div>

     {/* navbar menu */}
     <div onClick={handleToggle} className={`menuBtn w-[43px] h-[33px] lg:hidden relative flex_center ${isActive ? 'active' : ''}`}>
        <span className='absolute w-full h-[5px] top-0 bg-black rounded-lg duration-150'></span>
        <span className='absolute w-full h-[5px]   bg-black rounded-lg duration-150'></span>
        <span className='absolute w-full h-[5px] bottom-0 bg-black rounded-lg duration-150'></span>
     </div>

    </nav>
  )
}

export default Navbar
