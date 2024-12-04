import React from 'react'
import './Navbar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import profile  from '/src/assets/profile.webp'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <SearchRoundedIcon className='nav-icon'/>
        <input type="text" placeholder='Search (ctrl+/)'/>
      </div>
      <div className="navbar-right">
        <TranslateRoundedIcon className='nav-icon'/>
        <DarkModeOutlinedIcon className='nav-icon'/>
        <GridViewOutlinedIcon className='nav-icon'/>
        <NotificationsNoneOutlinedIcon className='nav-icon'/>
        <img src={profile} alt="" />
      </div>
    </div>
  )
}

export default Navbar
