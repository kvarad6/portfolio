import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material'
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  


const Header = () => {
  const pages = ["Home", "About", "Resume", "Projects", "Contact"]
 
  return (
    <>
      <AppBar elevation={0} position='fixed' sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography sx={{color: 'black', fontWeight: 500, fontSize: 20}}>Varad Kulkarni</Typography>
          <Tabs sx={{ marginLeft: 'auto', color: 'black' }}indicatorColor='secondary'>
            {
              pages.map((page, index) => (
                <Tab key={index} label={page}></Tab>
              ))
            }
          </Tabs>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header