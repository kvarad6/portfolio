import { Typography, Box } from '@mui/material'
import React from 'react'

const Title = () => {
  return (
    <>
        <Box sx={{m:10}}>
            <Typography sx={{ color: 'white', fontSize: 30 }}>Hi, I am</Typography>
            <Typography sx={{ color: 'white', fontSize: 80 }}>Varad Kulkarni</Typography>
        </Box>
        
    </>
  )
}

export default Title