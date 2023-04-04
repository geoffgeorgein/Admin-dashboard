import React from 'react'
import './Widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function Widgets() {
  return (
    <div className='widgets'>

        <div className='left'>

            <span className='title'>USERS</span>
            <span className='counter'>21312</span>
            <span className='link'> see all user </span>
        
        </div>
        <div className='right' >

            <div className='percentage positive'>
            <KeyboardArrowUpIcon/> 
                20%
            </div>
            <PersonOutlineIcon/>
        
        </div>

    </div>
  )
}

export default Widgets