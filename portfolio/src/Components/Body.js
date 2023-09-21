import { Box } from '@mui/material'
import React from 'react'
import AboutMe from './AboutMe'
import Resume from './Resume'
import Projects from './Projects'
import ContactMe from './ContactMe'
import Skills from './Skills'
import Certifications from './Certifications'
import Publications from './Publications'
import Title from './Title'


const Body = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between', rowGap: 12 }}>
                <Title />
                <AboutMe />
                <Skills />
                <Resume />
                <Projects />
                <Certifications />
                <Publications />
                <ContactMe />
            </Box>
        </>
    )
}

export default Body