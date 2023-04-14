import React from 'react'
import './New.scss';
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';

function New() {
  return (
    <div className='new'>

      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className='top'>

          <h1>Add New User</h1>
        </div>

        <div className='bottom'>

          <div className='left'>
          <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              
              alt=""
            />
          </div>
          <div className='right'>
            <form>

            <div className='formInput'>
              <label>
                <UploadFileOutlinedIcon/>
              </label>
                <input type="file" ></input>
              </div>
              <div className='formInput'>
                <label>Username</label>
                <input type="text" placeholder='john_doe'></input>
              </div>

              <div className='formInput'>
              <label>Name and surname</label>
                <input type="text" placeholder='John Doe'></input>
              </div>

              <div className='formInput'>
              <label>Email</label>
                <input type="email" placeholder=''></input>
              </div>

              <div className='formInput'>
              <label>Phone</label>
                <input type="text" placeholder='+91 3367832'></input>
              </div>

              <div className='formInput'>
              <label>Password</label>
                <input type="password" placeholder=''></input>
              </div>

              <div className='formInput'>
              <label>Addresses</label>
                <input type="text" placeholder=''></input>
              </div>

              <div className='formInput'>
              <label>Country</label>
                <input type="text" placeholder='USA'></input>
              </div>

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New