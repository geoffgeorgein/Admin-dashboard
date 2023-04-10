import React from 'react'
import './Featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


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

        </div>
    </div>
  )
}

export default Featured