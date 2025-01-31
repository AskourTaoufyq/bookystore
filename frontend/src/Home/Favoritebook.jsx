import React from 'react'
import FavBookImg from "../assets/books/favbooks.jpg"
import { Link } from 'react-router-dom'

const Favoritebook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-10'>
        <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
        </div>

        <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favorite
        <span className='text-green-800'>Book Here</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni cumque omnis voluptatem odio optio maxime, vitae aliquam aspernatur aperiam, quaerat impedit? Voluptates amet labore minus perferendis, illo ullam temporibus. Dignissimos!</p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold'>100+</h3>
                <p className='text-base'>Book listing</p>
            </div>

            <div>
                <h3 className='text-3xl font-bold'>100+</h3>
                <p className='text-base'>Register</p>
            </div>

            <div>
                <h3 className='text-3xl font-bold'>500+</h3>
                <p className='text-base'>Dowloads Books</p>
            </div>
        </div>
        
        <Link to="/Shop"><button className='bg-green-800 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore Now</button></Link>
        </div>
    </div>
  )
}

export default Favoritebook