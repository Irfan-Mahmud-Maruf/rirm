import React, { useState } from 'react'
import Content from './Content'
import Header from './Header'
import Modal from './Modal'



const Body = () => {
  const [state, setState] = useState(false)
  const openModal =() =>{
    setState (true)
}
  return (
    <div className="h-screen flex-1">
    <Header/>
    <Content openModal={openModal}/>
    <Modal state={state} setState={setState}/>

  </div>
  )
}

export default Body