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


function Sidebar() {
  return (
    <div className='sidebar'>

      <div className='top'> <span className='logo'>GG admin</span> </div>
      <div className='center'>

      <ul>
        <li> 
          <PeopleOutlineIcon/>
          <span> Users</span>
        </li>

        <li> 
          <InventoryIcon/>
          <span>Products </span></li>

        <li> 
          <CreditCardIcon/>
          <span> Orders</span></li>

        <li> 
          <LocalShippingIcon/>
          <span> Delivery</span></li>
        <li> 
          <AssessmentIcon/>
          <span>Stats </span></li>

        <li>
          <NotificationsIcon/>
        
         <span>Notifications </span></li>

         <li>
          <PsychologyIcon/>
        
         <span>Logs</span></li>

         <li>
          <SettingsApplicationsIcon />
        
         <span>Settings</span></li>

         <li>
          <LogoutIcon />
        
         <span>Logout</span></li>
        

      </ul>

      
      </div>
      <div className='bottom'> color options</div>

    </div>
  )
}

export default Sidebar