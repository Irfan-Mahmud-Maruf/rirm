import React, { useEffect, useState } from 'react';
import { BsEnvelope, BsFileEarmarkText, BsFillInboxFill, BsTagFill, BsTrash } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import dataService from '../../Firebase/useDb';

const Content = ({openModal}) => {
    const [mails, setMails] = useState([]);
  useEffect(() => {
    getMails();
  }, []);

  const getMails = async () => {
    const data = await dataService.getAllMails();
    console.log(data.docs);
    setMails(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await dataService.deleteMail(id);
    getMails();
  };
    
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
                            <p className='text-xs bg-orange-500 text-white font-semibold rounded px-2 '>{mails.length}</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsEnvelope className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Send mail</p>
                        </div>
                        
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Important</p>
                        </div>
                       
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsFileEarmarkText className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Draft</p>
                        </div>
                        <div>
                            <p className='text-xs bg-red-500 text-white font-semibold rounded px-2 '>2</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center border-b py-1'>
                        <div className='flex justify-center items-center'>
                            <BsTrash className='text-sm text-gray-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Trush</p>
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
                            <p className='text-sm text-gray-500  ml-2'>Work</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-red-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Documents</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-blue-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Social</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-yellow-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Advertising</p>
                        </div>
                    </li>
                    <li className='flex justify-between items-center pb-1'>
                        <div className='flex justify-center items-center'>
                            <GoPrimitiveDot className='text-orange-500'/>
                            <p className='text-sm text-gray-500  ml-2'>Clients</p>
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
                        <p className='text-xs text-gray-500  ml-1'>Work</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Home</p>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Children</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Holidays</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Music</p>
                    </div>
                    
                </div>
                <div className='flex'>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Photography</p>
                    </div>
                    <div className='flex justify-between items-center bg-white rounded px-2 py-1 m-1'>
                        <BsTagFill className='text-xs text-gray-500'/>
                        <p className='text-xs text-gray-500  ml-1'>Film</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='h-full'>
        <div className="mb-2">
        
        <button className="w-full p-2.5 flex-1 text-white bg-green-400 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2" onClick={getMails}
        >Refresh List
        </button>
      </div>

      <table>
        <thead>
          <tr className='bg-white rounded'>
            <th className='px-6 border-r text-center'>#</th>
            <th className='px-9 border-r text-center'>Mail</th>
            <th className='px-9 border-r text-center'>CC</th>
            <th className='px-9 border-r text-center'>Subject</th>
            <th className='px-9 border-r text-center'>Message</th>
            <th className='px-9'>Action</th>
          </tr>
        </thead>
        <tbody>
          {mails.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td className='px-6 border-r text-sm'>{index + 1}</td>
                <td className='px-9 border-r text-sm'>{doc.mail}</td>
                <td className='px-9 border-r text-sm'>{doc.cc}</td>
                <td className='px-9 border-r text-sm'>{doc.subject}</td>
                <td className='px-9 border-r text-sm'>{doc.message}</td>
                <td className='px-9'>
                <button className="w-full mt-2 p-2.5 flex-1 text-white bg-green-400 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2" onClick={(e) => deleteHandler(doc.id)}
                >
                    Delete
                </button>
                 
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
            
        </div>

    </div>
  )
}


export default Content