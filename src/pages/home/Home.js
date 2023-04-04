import React from 'react'
import './home.scss';
import Widgets from '../../components/widgets/Widgets'

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

function home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
      
        <Navbar/>

        <div className='widget'> 
          <Widgets/>
          <Widgets/>
          <Widgets/>
          <Widgets/>


        </div>
      </div>
    </div>
  )
}

export default home