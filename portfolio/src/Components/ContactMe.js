import React from 'react'
import { Grid, Typography, Link } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const ContactMe = () => {
    return (
        <>
            <Typography sx={{ textAlign: 'center', fontSize: 40, color: '#64CCC5' }}>Let's Connect</Typography>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5, m: 3 }}>
                <Grid Item xs={3}>
                    <Link href="https://www.linkedin.com/in/varad-kulkarni-2001/" target="_blank">
                        <LinkedInIcon fontSize='large' sx={{ color: '#3AA6B9'}} />
                    </Link>
                </Grid>
                <Grid Item xs={3}>
                    <Link href="https://www.instagram.com/_varad.kulkarni_/" target="_blank">
                        <InstagramIcon fontSize='large' sx={{ color: '#3AA6B9' }} />
                    </Link>
                </Grid>
                <Grid Item xs={3}>
                    <Link href="https://github.com/kvarad6" target="_blank">
                        <GitHubIcon fontSize='large' sx={{ color: '#3AA6B9' }} />
                    </Link>
                </Grid>
                <Grid Item xs={3}>
                    <Link href="mailto:kvarad6@gmail.com" target="_blank">
                        <EmailIcon fontSize='large' sx={{ color: '#3AA6B9' }} />
                    </Link>
                </Grid>
            </Grid>

        </>
    )
}

export default ContactMe