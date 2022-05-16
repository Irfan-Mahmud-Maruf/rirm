import React from 'react';
import { BsBoxArrowInRight } from "react-icons/bs";
import { FaBars, FaBell, FaEnvelope } from "react-icons/fa";
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const { user, logOut} = useAuth()
  return (
    <div className='flex justify-between items-center my-3 px-4'>
        <div className='flex justify-center items-center'>
         <FaBars className='inline-block cursor-pointer'/>
         <p className='ps-2 text-gray-400'>Search for somethings...</p>
        </div>
        <div className='flex justify-center items-center'>
         <FaEnvelope className='inline text-gray-400 cursor-pointer'/>
         <FaBell className='inline text-gray-400 mx-3 cursor-pointer'/>
         <div className='flex justify-center items-center cursor-pointer' onClick={logOut}>
            <BsBoxArrowInRight className='inline text-gray-400 '/>
            <p className='ps-2 text-gray-400'>Logout</p>
         </div>
        </div>
    </div>
  )
}

export default Header