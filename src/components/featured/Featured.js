import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function Featured() {
  return (
    <div className='featured'>
    
      <div className='top' >

        <h1 className='title'>Total Revenue</h1>
        <MoreVertIcon fontSize='small'/>
      </div>

      <div className='bottom'>
        <div className='featured chart'>

          <CircularProgressbar value={70} text='70%' strokeWidth={4}/> 

        </div>
        <p className='title'> Total sales made today</p>
        <p className='amount'> $420</p>
        <p className='desc'>Previous transactions processing.Last payments may not be included. </p>

        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <ArrowDownwardIcon fontSize='small'/>
              <div className='resultAmount'>$11.2k</div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult positive'>
              <ArrowDownwardIcon fontSize='small'/>
              <div className='resultAmount'>$11.2k</div>
            </div>
          </div>

          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <ArrowDownwardIcon fontSize='small'/>
              <div className='resultAmount'>$11.2k</div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Featured