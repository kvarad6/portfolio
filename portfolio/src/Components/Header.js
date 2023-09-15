import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const Header = () => {
  const pages = ["Home", "About", "Resume", "Projects", "Contact"]

  return (
    <>
      <AppBar elevation={0} position='fixed' sx={{ backgroundColor: '#053B50', boxShadow: 'none' }}>
        <Toolbar>
          <KeyboardArrowLeftIcon />
          <Typography sx={{ color: '#40c7cf', fontWeight: 500, fontSize: 20 }}>Varad Kulkarni <span style={{ color: 'white' }}>/</span></Typography>
          <KeyboardArrowRightIcon />
          <Tabs sx={{ marginLeft: 'auto' }} indicatorColor='secondary'>
            {
              pages.map((page, index) => (
                <Tab sx={{ color: '#40c7cf' }} key={index} label={page}></Tab>
              ))
            }
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header