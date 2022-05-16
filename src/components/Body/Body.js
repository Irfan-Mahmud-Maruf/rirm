import React, { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Modal from './Modal'



const Body = () => {
  const [mailId, setMailId] = useState("");

  
  const [state, setState] = useState(false)
  const openModal =() =>{
    setState (true)
}
  return (
    <div className="h-screen flex-1">
    <Header/>
    <Content openModal={openModal} className='bg-gray-100 h-full flex pt-4'/>
    <Modal state={state} setState={setState} id={mailId} setMailId={setMailId}/>

  </div>
  )
}

export default Body