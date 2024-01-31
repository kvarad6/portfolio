import { Typography, Box, Grid, Button, Avatar } from '@mui/material'
import React from 'react'
// import programmer from '../static/images/avatar/programmer.png'
import programming2 from '../static/images/avatar/programming2.png'
import { motion } from "framer-motion"

const Title = () => {
    return (
        <div id="home">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: { xs: 8, md: 10, lg: 15 } }}>
                        <Grid Item xs={6}>
                            <Grid Item xs={6} >
                                <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 25, lg: 30 } }}>Hi, I am</Typography>
                            </Grid>
                            <Grid Item xs={6}>
                                <Typography sx={{ color: 'white', fontSize: { xs: 40, md: 60, lg: 80 } }}>Varad Kulkarni</Typography>
                            </Grid>
                            <Grid sx={{ display: 'flex', flexDirection: 'row', gap: 10, mt: 5 }}>
                                <Grid Item xs={6}>
                                    <Button href="mailto:kvarad6@gmail.com" target="_blank" variant="outlined" sx={{
                                        transition: '0.4s',
                                        color: '#97FEED', textTransform: 'none', fontSize: { xs: 13, md: 15, lg: 20 }, borderColor: '#64CCC5', ':hover': {
                                            borderColor: 'white',
                                            color: 'white'
                                        }
                                    }}>
                                        Contact Me
                                    </Button>
                                </Grid>
                                <Grid Item xs={6}>
                                    <Button href="https://drive.google.com/file/d/1fPwcCKpnTKY2cHkmGxpXxasWuuScdGzE/view?usp=sharing" target="_blank" variant="outlined" sx={{
                                        transition: '0.4s',
                                        color: '#97FEED', textTransform: 'none', fontSize: { xs: 13, md: 15, lg: 20 }, borderColor: '#64CCC5', ':hover': {
                                            borderColor: 'white',
                                            color: 'white'
                                        }
                                    }}>
                                        Resume
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid Item xs={6}>
                            <Avatar alt="Profile Photo" src={programming2} variant="rounded" sx={{ width: { xs: 200, md: 250, lg: 300 }, height: { xs: 200, md: 250, lg: 300 }, alignSelf: 'right' }} />
                        </Grid>
                    </Grid>
                </Box>
            </motion.div>
        </div>
    )
}

export default Title