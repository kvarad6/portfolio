import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import DrawerComponent from './DrawerComponent';


const Header = () => {
  // const pages = ["Home", "About", "Resume", "Projects", "Contact"]
  // const [value, setValue] = React.useState();

  return (
    <>
      <AppBar elevation={0} position='fixed' sx={{ backgroundColor: '#053B50', boxShadow: 'none' }}>
        <Toolbar>
          <KeyboardArrowLeftIcon />
          <Typography sx={{ color: '#40c7cf', fontWeight: 500, fontSize: 20 }}>Varad Kulkarni <span style={{ color: 'white' }}>/</span></Typography>
          <KeyboardArrowRightIcon />
          {/* <Tabs sx={{ marginLeft: 'auto' }} value={value} onChange={(e, value) => setValue(value)} indicatorColor='secondary'>
            {
              pages.map((page, index) => (
                <Tab
                  sx={{ color: '#40c7cf', textTransform: 'none' }}
                  key={index}
                  label={page}
                >
                </Tab>
              ))
            }
          </Tabs> */}
          {/* <Tabs sx={{ marginLeft: 'auto' }}>
            <BrowserRouter>
              <Routes>
                <Route path='/Projects' to={<Projects />} />
              </Routes>
            </BrowserRouter>
          </Tabs> */}
        </Toolbar>
      </AppBar>
      {/* <DrawerComponent /> */}
    </>
  )
}

export default Header