import React from 'react'
import Logo from './logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
        <div className="border flex items-center py-5 pl-10 space-x-10 ">
            <img className="w-[50px] md:w-[70px] hover:scale-110 duration-500" src={Logo}></img>
            <Link to="/" className='text-xl md:text-3xl text-blue-400 font-bold hover:scale-105 duration-500'>MOVIES</Link>
        </div>
    </>
  )
}

export default NavBar