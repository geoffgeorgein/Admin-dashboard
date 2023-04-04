import React from 'react'
import "./Navbar.scss";
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


function Navbar() {
  return (
    <div className='navbar'>

      <div className='wrapper'>

        <div className='search'>

          <input type="text" placeholder='Search...'></input>
          <SearchOutlinedIcon/>
        </div>

        <div className='items'>

          <div className='item'>
            <LanguageIcon/>
            English
          </div>

          <div className='item'>
            <NotificationsNoneIcon/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListOutlinedIcon/>
          </div>

          <div className='item'>
            <img 
              src='https://img.freepik.com/free-icon/user_318-159711.jpg'
              alt='avatar'
              className='avatar'
            />
          </div>

        </div>
      </div>
    
    
    
    </div>
  )
}

export default Navbar