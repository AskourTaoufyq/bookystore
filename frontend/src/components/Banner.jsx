import React from 'react'
import Bannercard from '../Home/Bannercard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-green-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/*left side */}
            <div className='md:w-1/2 space-y-7 h-full'>
                <h2 className='text-5xl font-bold leading-snug text-black'>By & sell your Books <span className='text-green-800'>for the best prices</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit veritatis voluptate corporis fugit blanditiis. Magnam saepe nemo molestiae assumenda iusto, nihil voluptatibus incidunt dolorem quia iste a dolorum! Aspernatur, omnis!</p>
                <div>
                    <input type="search" name='search' id='search' placeholder='Search a Book' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-green-800 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>
            {/*right side */}
            <div>
                <Bannercard/>
            </div>
        </div>
    </div>
  )
}

export default Banner