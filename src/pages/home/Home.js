import React from 'react'
import './home.scss';
import Widgets from '../../components/widgets/Widgets'

import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

import Chart from '../../components/chart/chart';
import Featured from '../../components/featured/Featured';
import Table from '../../components/table/Table';

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
        <div className='charts'>
          
          <Featured/>
          <Chart aspect={2/1} title="User spending (Last 6 months)"/>
        </div>

        <div className='listContainer'>
          <div className="listTitle">Latest Transactions</div>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Home