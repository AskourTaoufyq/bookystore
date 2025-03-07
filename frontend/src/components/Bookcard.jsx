import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
//import './styles.css';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { FaCartShopping } from 'react-icons/fa6';

const Bookcard = ({headLine, books}) => {
    console.log(books);

  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text=5xl text-center font-bold text-black my-5'>{headLine}</h2>

        {/*cards books*/}
        <div className='mt-12'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
    
        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to={"/book/${book._id}"}>
                <div className='relative'>
                    <img src={book.imageURL} alt="" />
                    <div className='absolute top-3 right-3 bg-green-400 hover:bg-black p-2 rounded'>
                        <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                </div>

                <div>
                    <div>
                    <h3>{book.bookTitle}</h3>
                    <p>{book.authorName}</p>
                    </div>

                    <div>
                        <p>Price: $10:00</p>
                    </div>
                </div>

                </Link>
            </SwiperSlide> )
        }
      </Swiper>
        </div>
    </div>
  )
}

export default Bookcard