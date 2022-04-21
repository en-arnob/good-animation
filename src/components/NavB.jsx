import React from "react";
import { useNavigate } from "react-router-dom";
import { FaFireAlt } from "react-icons/fa";
import { GiStack } from "react-icons/gi";
import { BsListStars } from "react-icons/bs";
import { SiAwesomelists } from "react-icons/si";
const NavB = () => {
  let navigate = useNavigate();

  const routeChange = (path) => {
    navigate(path);
  };
  return (
    <div className='md:hidden'>
      <section className='block  fixed inset-x-0 bottom-0 z-10 bg-rose-800 text-white shadow'>
        <div className='flex flex-row justify-between py-2 px-6'>
          <div
            onClick={() => routeChange("/")}
            className='cursor-pointer flex flex-col  hover:text-yellow-200 justify-center items-center text-center active'
          >
            <FaFireAlt className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Trending</h1>
          </div>
          <div
            onClick={() => routeChange("/genre")}
            className='cursor-pointer flex flex-col justify-center hover:text-yellow-200 items-center text-center'
          >
            <GiStack className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Top</h1>
          </div>
          <div className='cursor-pointer flex flex-col justify-center hover:text-yellow-200 items-center text-center'>
            <BsListStars className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Latest</h1>
          </div>
          <div className='cursor-pointer flex flex-col justify-center hover:text-yellow-200 items-center text-center'>
            <SiAwesomelists className='text-center text-xl justify-center items-center' />
            <h1 className='text-sm'>Genres</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NavB;
