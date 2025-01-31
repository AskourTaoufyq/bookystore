import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { FaBlogger } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
    const [isMenuOpen, setisMenuOpen] =useState(false);
    const [isSticky, setisSticky] =useState(false);

    //menu toggle
    const toggleMenu = () => {
        setisMenuOpen(!isMenuOpen);
    }
    useEffect(() => {
        const handlescroll = () => {
            if (window.scrollY > 100) {
                setisSticky(true);
            } else {
                setisSticky(false);
            }
        }

        window.addEventListener("scroll", handlescroll);
        return () => {
            window.removeEventListener("scroll", handlescroll);
        }
    }, [])

    //nav items
    const navItems = [
        { link: "Home", path: '/'},
        { link: "Shop", path: '/Shop'},
        { link: "About", path: '/About'},
        { link: "Selling books", path: '/Admin/Dashboard'},
        { link: "Blog", path: "/Blog"},
    ]

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
        <nav className={'py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-green-300" : ""}'}>
            <div className='flex justify-between items-center text-center gap-8'>
                {/*logo*/}
                <Link to="/" className='text-2xl font-bold text-green-800 flex items-center gap-2'><FaBlogger className='inline-block'/>Booky</Link>

                {/*nav bar large size*/}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-green-800'>{link}</Link> )
                    }
                </ul>

                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-green-800'/></button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar