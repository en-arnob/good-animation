import React from "react";

import { FaFireAlt } from "react-icons/fa";

const NavB = () => {
  return (
    <div className='md:hidden'>
      <section className='block fixed inset-x-0 bottom-0 z-10 bg-rose-700 text-white shadow'>
        <div className='flex flex-row justify-between py-2 px-6'>
          <div className='flex flex-col hover:text-green-400 justify-center items-center text-center'>
            <FaFireAlt className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Trending</h1>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <FaFireAlt className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Top</h1>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <FaFireAlt className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Latest</h1>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <FaFireAlt className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Trending</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavB;
