import React from 'react';
import { BsFillInboxFill, BsTagFill } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

const Content = ({openModal}) => {
    
  return (
    <div className='bg-gray-100 h-full flex pt-4 '>
        <div className='mx-4'>
            <button className='bg-green-400 text-white rounded px-16 py-1' onClick={openModal}>
                Compose Mail
            </button>
            
            <div>
                <p className='text-sm text-gray-500 font-semibold mt-4 mb-2'>FOLDERS</p>
                <ul>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFillInboxFill className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                        <div>
                            <p className='text-xs bg-orange-500 text-white font-semibold rounded px-2 '>16</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFillInboxFill className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                        
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFillInboxFill className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                       
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFillInboxFill className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                        <div>
                            <p className='text-xs bg-red-500 text-white font-semibold rounded px-2 '>2</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFillInboxFill className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                        
                    </li>
                    
                </ul>
            </div>

            <div>
                <p className='text-sm text-gray-500 font-semibold mt-4 mb-2'>CATAGORIES</p>
                <ul>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-green-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Inbox</p>
                        </div>
                    </li>
                    
                    
                </ul>
            </div>
            
            <div>
                <p className='text-sm text-gray-500 font-semibold mt-4 mb-2'>LABELS</p>
                <div className='flex'>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Family</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-white h-full'>
        </div>

    </div>
  )
}


export default Content