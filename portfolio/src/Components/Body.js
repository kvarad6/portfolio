import { Grid, Box } from '@mui/material'
import React from 'react'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Skills from './Skills'
import Certifications from './Certifications'
import Publications from './Publications'


const Body = () => {
    return (
        <>
            <Box>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', rowGap: 10 }}>
                    <Grid Item xs={12} sx={{ mt: 5, ml: 5, mr: 5 }}>
                        <AboutMe />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5 }}>
                        <Skills />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5 }}>
                        <Resume />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5 }}>
                        <Projects id='projects' />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5 }}>
                        <Certifications />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5 }}>
                        <Publications />
                    </Grid>
                    <Grid Item xs={12} sx={{ ml: 5, mr: 5, mb: 5 }}>
                        <ContactMe />
                    </Grid>
                </Grid>
            </Box>
            {/* <Box sx={{display:'flex', flexDirection:'column'}}>
                <AboutMe />
                <Skills />
                <Resume />
                <Projects />
                <Certifications />
                <ContactMe />
            </Box> */}
        </>
    )
}

export default Body