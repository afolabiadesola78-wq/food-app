import React, { useState } from 'react';
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch }  from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdFavorite, MdHelp } from 'react-icons/md';
import { FaUserFriends, FaWallet } from 'react-icons/fa';

const Navbar = () => {
const [ nav, setNav ] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* leftside */}
      <div className='flex items-center'>
        <div onClick={() => setNav(!nav)}
        className='cursor-pointer'>
          {/* we add react icons: in terminal type npm install react-icons
            we can also go to react-icons on google. Then type menu in the search bar
            to get what we wrote below
        */}
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Best <span className='font-bold'> Eats </span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Search Input */}

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input className='bg-transparent p-2 w-full focus:outline-none' type="text" placeholder='Search foods' />
      </div>


      {/* Cart Button */}
      <button className='bg-black text-white hidden md:flex items-center p-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2'/> Cart
      </button>


      {/* Mobile Menu */}
      {/* Overlay */}
      {/* <div className='bg-black/80 fixed w-full h-screen z-10 left-0 top-0'></div> */}
      
      {/* The hook (useState)is used here */}
      { nav ? <div className='bg-black/80 fixed w-full h-screen z-10 left-0 top-0'></div>
       : ''}


      {/* Side Slide Drawer */}
      {/* <div className='fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300'> */}

        {/* The hook (useState)is used here */}
      <div className={ nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>  
        {/* lets put a close button */}
        {/* <AiOutlineClose size={30} className='absolute right-4 top-6 cursor-pointer'/> */}

        {/* We use the hook (useState) as well to close the slide */}
        <AiOutlineClose 
        onClick={() => setNav(!nav)}
        size={30} className='absolute right-4 top-6 cursor-pointer'/>
        <h2 className='text-2xl p-6'> 
          Best <span className='font-bold'> Eats </span>
        </h2>
        <nav>
          <ul className='flex flex-col p-6 text-gray-800'>
            <li className='text-xl py-4 flex items-center'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
            <li className='text-xl py-4 flex items-center'><MdFavorite size={25} className='mr-4' /> Favourites</li>
            <li className='text-xl py-4 flex items-center'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='text-xl py-4 flex items-center'><MdHelp size={25} className='mr-4' /> Help</li>
            <li className='text-xl py-4 flex items-center'><AiFillTag size={25} className='mr-4' /> Promotions</li>
            <li className='text-xl py-4 flex items-center'><BsFillSaveFill size={25} className='mr-4' /> Best One</li>
            <li className='text-xl py-4 flex items-center'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
          </ul>
        </nav>
      </div>


    </div>
  );
}

export default Navbar

/*    
h1: for styling, media query in tailwind css is a first mobile approach (i.e text-2xl)
    then we have breaks small(sm is from 640), medium(md is from 768), large(lg is from 1024 or so)
div for p-tags: anything in mobile we want to hide the p-tag i.e why the hidden is there
input: bg-transparent takes the white color away from the search foods
"focus:outline-none":- removes the box that shows when you click on the search bar
Mobile Menu: div with bg-black/80 means black with opacity 80
h-screen: means the entire height of the screen
*/