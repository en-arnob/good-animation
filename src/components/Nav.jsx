import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiBison, GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className='w-full z-50 inset-x-0 fixed justify-center items-center '>
      <div className='w-full bg-rose-800 flex items-center px-6 py-3 shadow-xl'>
        <GiBison className='text-2xl text-white mr-2' />
        <h1 className='text-xl md:text-2xl text-white'>Good Animation</h1>

        <div className='hidden md:flex items-center justify-end mr-6 gap-6 flex-1'>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            <Link to='/'>Home</Link>
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            <Link to='/genre'>Genre</Link>
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            IMdb Top
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            Latest
          </li>
          <li className='text-base list-none text-white font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
            Disney
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
