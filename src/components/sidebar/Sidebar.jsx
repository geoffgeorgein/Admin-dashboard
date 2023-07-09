import React from 'react'
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';


function Sidebar() {
  return (
    <>
    <div className='sidebar'>

    <Link to={'/'} style={{textDecoration:"none"}}>
      <div className='top'> <span className='logo'>GG admin</span> </div>
    </Link>
      <div className='center'>

    

      <ul>

      <p className='title'>LISTS</p>
        <li> 
        <Link to={'/users'} style={{textDecoration:"none"}}>
          <PeopleOutlineIcon className='icon'/>
          <span> Users</span>
          </Link>
        </li>

        <li> 
        <Link to={'/products'} style={{textDecoration:"none"}}>
          <InventoryIcon className='icon' />
          <span>Products </span>
        </Link>
        </li>
          
        <li> 
          <CreditCardIcon className='icon' />
          <span> Orders</span></li>

        <li> 
          <LocalShippingIcon className='icon' />
          <span> Delivery</span></li>

          <p className='title'>USEFUL</p>
        <li> 
          <AssessmentIcon className='icon' />
          <span>Stats </span></li>

        <li>
          <NotificationsIcon  className='icon' />
        
         <span>Notifications </span></li>
          <p className='title'>SERVICE</p>
         <li>
          <PsychologyIcon  className='icon'/>
        
         <span>Logs</span></li>

         <li>
          <SettingsApplicationsIcon className='icon' />
        
         <span>Settings</span></li>

         <p className='title'>USER</p>
         <li>
         
          <LogoutIcon  className='icon'/>
        
         <span>Logout</span></li>
        

      </ul>

      
      </div>
      <div className='bottom'>

        <div className='colorOption'></div>
        <div className='colorOption'></div>
        
      </div>

    </div>
    </>
  )
}

export default Sidebar