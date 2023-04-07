import React from 'react'
import './home.scss';
import Widgets from '../../components/widgets/Widgets'

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

function Home() {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='home-container'>
      
        <Navbar/>

        <div className='widget'> 
          <Widgets type='user'  />
          <Widgets type='order' />
          <Widgets type='earning' />
          <Widgets type='balance'/>


        </div>
      </div>
    </div>
  )
}

export default Home