import React from 'react'
import { Grid, Typography, Link, Box } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion"

const ContactMe = () => {
    return (
        <div id="contacts">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    {/* Create a component for logo icon and use that in the for loop. Store href link in json. */}
                    <Typography sx={{ textAlign: 'center', fontSize: { xs: 28, md: 30, lg: 33 }, color: '#97FEED' }}>Let's Connect</Typography>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5, m: 3 }}>
                        <Grid Item xs={3}>
                            <Link href="https://www.linkedin.com/in/varad-kulkarni-2001/" target="_blank">
                                <LinkedInIcon fontSize='large' sx={{
                                    transition: '0.4s',
                                    color: '#5CD2E6', ':hover': {
                                        boxShadow: 20, // theme.shadows[20]
                                        color: 'white'
                                    }
                                }} />
                            </Link>
                        </Grid>
                        <Grid Item xs={3}>
                            <Link href="https://www.instagram.com/_varad.kulkarni_/" target="_blank">
                                <InstagramIcon fontSize='large' sx={{
                                    transition: '0.4s',
                                    color: '#5CD2E6', ':hover': {
                                        boxShadow: 20, // theme.shadows[20]
                                        color: 'white'
                                    }
                                }} />
                            </Link>
                        </Grid>
                        <Grid Item xs={3}>
                            <Link href="https://github.com/kvarad6" target="_blank">
                                <GitHubIcon fontSize='large' sx={{
                                    transition: '0.4s',
                                    // color: '#3AA6B9', 
                                    color: '#5CD2E6',
                                    ':hover': {
                                        boxShadow: 20, // theme.shadows[20]
                                        color: 'white'
                                    }
                                }} />
                            </Link>
                        </Grid>
                        <Grid Item xs={3}>
                            <Link href="mailto:kvarad6@gmail.com" target="_blank">
                                <EmailIcon fontSize='large' sx={{
                                    transition: '0.4s',
                                    color: '#5CD2E6', ':hover': {
                                        boxShadow: 20, // theme.shadows[20]
                                        color: 'white'
                                    }
                                }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </motion.div>
        </div>
    )
}

export default ContactMe