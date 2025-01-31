import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import {FaStar} from 'react-icons/fa6'
import { Avatar } from "flowbite-react";
import proPic from '../assets/avatar.png'

const Reviews = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest</h5>
                    <p className='text-base'>Reader</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest1</h5>
                    <p className='text-base'>Reader1</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest2</h5>
                    <p className='text-base'>Reader2</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest3</h5>
                    <p className='text-base'>Reader3</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest4</h5>
                    <p className='text-base'>Reader4</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 border'>
            <div className='space-y-6'>
                <div className='text-yellow-200 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>

                <div className='mt-8'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus ullam quaerat officiis atque at eaque, voluptatum nemo eos, pariatur non ipsum? Officia aspernatur labore, nam iure quasi minus obcaecati.</p>
                    <Avatar img={proPic} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                    <h5 className='text-lg font-medium'>Guest5</h5>
                    <p className='text-base'>Reader5</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Reviews