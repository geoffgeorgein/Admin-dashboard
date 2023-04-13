import React from 'react'
import './Single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/chart';
import List from '../../components/table/Table';

function single() {
  return (
    <div className='single'>

      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className='top'>
          <div className='left'>

            <div className='editButton'>Edit</div>

            <h1 className='title'>Information</h1>
            <div className='item'>

              <img
                  src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                  alt=""
                  className="itemImg"
                />
              <div className='details'>
                <h1 className='itemTitle'>Jane Doe</h1>
                <div className='detailItem'>
                  <span className='itemKey'> Email</span>
                  <span className='itemValue'> janedoe@gmail.com</span>
                </div>

                <div className='detailItem'>
                  <span className='itemKey'> Phone</span>
                  <span className='itemValue'> +91 53823997</span>
                </div>
                <div className='detailItem'>
                  <span className='itemKey'> Addresses</span>
                  <span className='itemValue'> Elton St 234 Garden Yard NY</span>
                </div>

                <div className='detailItem'>
                  <span className='itemKey'> Country</span>
                  <span className='itemValue'> US</span>
                </div>
              </div>
            </div>
          </div>
          <div className='right'>
          <Chart aspect={3/1}/>
          </div>
        </div>

        <div className='bottom'>
        <h1 className='title'>Last Transactions</h1>
          <List/>

        </div>
      </div>
    </div>
  )
}

export default single