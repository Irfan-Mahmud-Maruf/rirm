/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Layout from '../../asset/Calendar.png';
import Graphs from '../../asset/Chart.png';
import Dashboard from '../../asset/Chart_fill.png';
import Mail from '../../asset/Chat.png';
import Control from '../../asset/control.png';
import Matrics from '../../asset/Folder.png';
import Search from '../../asset/Search.png';
import Setting from '../../asset/Setting.png';
import User from '../../asset/User.png';
import useAuth from '../../Hooks/useAuth';

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const {user} = useAuth()
    console.log(user)
  
  return (
    <div
        className={` ${
          open ? "w-60" : "w-20 "
        } bg-dark-purple h-screen p-4  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={user.photoURL}
            className={`cursor-pointer duration-500 w-50 rounded-full ${
              !open && "scale-0"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {user.displayName}
          </h1>
        </div>
        <ul className="pt-6">
          
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Dashboard} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Dashboard
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Layout} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Layout
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Graphs} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Graphs
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Mail} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Mail
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Matrics} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Matrics
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Search} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Search
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={Setting} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            Setting
              </span>
          </li>
          <li className='flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4'>
            <img src={User} alt="" />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
            User
              </span>
          </li>

        </ul>
      </div>
  )
}

export default Sidebar