import React from 'react'
import Body from '../Body/Body'
import Sidebar from '../Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Body />
    </div>
  )
}

export default Home