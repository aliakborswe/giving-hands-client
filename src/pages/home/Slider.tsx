// Import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "@/assets/images/image-1-2.jpg";
import slide2 from "@/assets/images/image-2-1.jpg";
import slide3 from "@/assets/images/slider3.jpg";
import slide4 from "@/assets/images/image-2-2.jpg";
import slide5 from "@/assets/images/image-3-1.jpg";

const Slider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className='relative h-[600px] flex items-center justify-center'>
            <img
              src={slide1}
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative container mx-2.5 text-center flex flex-col items-center justify-center text-white h-full w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 uppercase'>
                We try to help people with volunteering
              </h1>
              <p className='text-base md:text-2xl font-semibold'>
                Try Our Programs And Help People For Their Needs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-[600px] flex items-center justify-center'>
            <img
              src={slide2}
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative container mx-2.5 text-center flex flex-col items-center justify-center text-white h-full w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 uppercase'>
                Every Small Act Makes a Big Difference. Volunteer Now!
              </h1>
              <p className='text-base md:text-2xl font-semibold'>
                Try Our Programs And Help People For Their Needs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-[600px] flex items-center justify-center'>
            <img
              src={slide3}
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative container mx-2.5 text-center flex flex-col items-center justify-center text-white h-full w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 uppercase'>
                There is a Great Value For Doing Good to Others
              </h1>
              <p className='text-base md:text-2xl font-semibold'>
                Try Our Programs And Help People For Their Needs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-[600px] flex items-center justify-center'>
            <img
              src={slide4}
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative container mx-2.5 text-center flex flex-col items-center justify-center text-white h-full w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 uppercase'>
                Lend a Hand, Spread the Hope. Start Volunteering Today!
              </h1>
              <p className='text-base md:text-2xl font-semibold'>
                Try Our Programs And Help People For Their Needs.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative h-[600px] flex items-center justify-center'>
            <img
              src={slide5}
              alt=''
              className='absolute inset-0 w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative container mx-2.5 text-center flex flex-col items-center justify-center text-white h-full w-full'>
              <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 md:mb-6 uppercase'>
                Together, We Can Create a World Full of Kindness and Compassion.
              </h1>
              <p className='text-base md:text-2xl font-semibold'>
                Try Our Programs And Help People For Their Needs.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
