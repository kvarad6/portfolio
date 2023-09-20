import { Typography, Box, Grid, Button, Avatar } from '@mui/material'
import React from 'react'
import programmer from '../static/images/avatar/programmer.png'

const Title = () => {
    return (
        <>
            <Box sx={{ m: 20 }}>
                <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent:'left', gap:15}}>
                    <Grid Item xs={6}>
                        <Grid Item xs={6}>
                            <Typography sx={{ color: 'white', fontSize: 30 }}>Hi, I am</Typography>
                        </Grid>
                        <Grid Item xs={6}>
                            <Typography sx={{ color: 'white', fontSize: 80 }}>Varad Kulkarni</Typography>
                        </Grid>
                    </Grid>
                    <Grid Item xs={6}>
                        <Avatar alt="Profile Photo" src={programmer} variant="rounded" sx={{ width: 150, height: 150}} />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', gap: 10, mt: 5 }}>
                    <Grid Item xs={6}>
                        <Button href="mailto:kvarad6@gmail.com" target="_blank" variant="outlined" sx={{
                            transition: '0.4s',
                            color: '#64CCC5', textTransform: 'none', fontSize: 20, borderColor: '#64CCC5', ':hover': {
                                borderColor: 'white',
                                color: 'white'
                            } }}>
                            Contact Me
                        </Button>
                    </Grid>
                    <Grid Item xs={6}>
                        <Button href="https://drive.google.com/file/d/14XgZQlgVFNDzghkwiDY4S88Qb2A7Xust/view?usp=sharing" target="_blank" variant="outlined" sx={{
                            transition: '0.4s',
                            color: '#64CCC5', textTransform: 'none', fontSize: 20, borderColor: '#64CCC5', ':hover': {
                                borderColor: 'white',
                                color: 'white'
                            } }}>
                            Resume
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Title