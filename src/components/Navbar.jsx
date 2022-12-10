import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'

import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaTwitter,FaYoutube,FaPinterest,FaInstagram} from 'react-icons/fa'
const Navbar = () => {
 
  const [nav,setNav] = useState(false);
  const [logo,setLogo] = useState(false)

  const handleNav = ()=>{
    setNav(!nav)
    setLogo(!logo)
  }

  return (
    <div className='flex w-full justify-between items-center  h-20 px-4 absolute z-10 text-white '> 
    <div >
        <h1   className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
    </div>
    <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
    </ul>

    <div className='hidden md:flex'>
        <BiSearch className='mr-2'  size={20}/>
        <BsPerson size={20} />
    </div>

    {/* hamburger menu */}

    <div onClick={handleNav} className='  md:hidden z-10'>
      {nav ? <AiOutlineClose size={20} className="text-black" /> :<HiOutlineMenuAlt4 size={20} />}


    </div>
{/* mobile menu */}
 <div onClick={handleNav} className={nav ? 'text-black absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col': 'absolute left-[-100%]'}>
  <ul>
    <h1>BEACHES.</h1>
        <li  className='border-b'>Destination</li>
        <li className='border-b'>Travel</li>
       <li className='border-b' >Home</li>
        <li className='border-b'>View</li>
        <li className='border-b'>Book</li>
        <div className='flex flex-col'>
          <button className='my-6'>Search</button>
          <button>Account</button>
        </div>
        <div className=' text-2xl cursor-pointer  flex justify-between my-6'>
          <FaFacebook icon className=''/>
          <FaTwitter className='icon'/>
          <FaYoutube className='icon'/>
         < FaPinterest className='icon'/>
          <FaInstagram className='icon'/>
        </div>
  </ul>
</div>
    </div>
  )
}

export default Navbar