import React from 'react'
import { Typography, Grid, Avatar, Box } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import Tooltip from '@mui/material/Tooltip';
import cLogo from '../static/images/logo/cLogo.png'
import htmlLogo from '../static/images/logo/htmlLogo.png'
import cssLogo from '../static/images/logo/cssLogo.png'
import gitLogo from '../static/images/logo/gitLogo.png'
import pythonLogo from '../static/images/logo/pythonLogo.png'
import fastapiLogo from '../static/images/logo/fastapiLogo.png'
import jiraLogo from '../static/images/logo/jiraLogo.png'
// import nodeLogo from '../static/images/logo/nodeLogo.png'
import muiLogo from '../static/images/logo/muiLogo.png'
// import flaskLogo_1 from '../static/images/logo/flaskLogo_1.png'
// import apigeeLogo_1 from '../static/images/logo/apigeeLogo_1.png'
import mongodbLogo from '../static/images/logo/mongodbLogo.png'
// import gcpLogo_1 from '../static/images/logo/gcpLogo_1.png'
// import djangoLogo from '../static/images/logo/djangoLogo.png'
import reactLogo from '../static/images/logo/reactLogo.png'
import firebaseLogo from '../static/images/logo/firebaseLogo.png'
import { motion } from "framer-motion"



const Skills = () => {
    return (
        <div id="skills">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid Item>
                            {/* <Typography sx={{ textAlign: 'center', fontSize: { xs: 28, md: 35, lg: 40 }, color: '#64CCC5' }}>My Tech Stack</Typography> */}
                            <Typography sx={{ textAlign: 'center', fontSize: { xs: 28, md: 29, lg: 30 }, color: '#97FEED' }}>My Tech Stack</Typography>
                        </Grid>
                        <Grid Item>
                            <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 30, md: 35, lg: 40 }, color: '#97FEED' }} />
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', gap: 5 }}>
                        <Tooltip title='HTML' placement="top">
                            <Avatar alt="HTML" src={htmlLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='CSS' placement="top">
                            <Avatar alt="CSS" src={cssLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='React' placement="bottom">
                            <Avatar alt="React" src={reactLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 68 }, height: { xs: 40, md: 50, lg: 62 } }} />
                        </Tooltip>
                        <Tooltip title='MUI' placement="bottom">
                            <Avatar alt="MUI" src={muiLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='C' placement="top">
                            <Avatar alt="C" src={cLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='Python' placement="top">
                            <Avatar alt="Python" src={pythonLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='FastAPI' placement="bottom">
                            <Avatar alt="FastAPI" src={fastapiLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        
                        <Tooltip title='Firebase' placement="bottom">
                            <Avatar alt="Firebase" src={firebaseLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        {/* <Tooltip title='Node JS' placement="bottom">
                            <Avatar alt="Node JS" src={nodeLogo} variant="rounded" sx={{ width: { xs: 45, md: 50, lg: 60 }, height: { xs: 52, md: 58, lg: 68 } }} />
                        </Tooltip> */}
                        <Tooltip title='MongoDB' placement="bottom">
                            <Avatar alt="MongoDB" src={mongodbLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='Git' placement="top">
                            <Avatar alt="Git" src={gitLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        <Tooltip title='JIRA' placement="bottom">
                            <Avatar alt="JIRA" src={jiraLogo} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                        </Tooltip>
                        {/* <Tooltip title='Flask' placement="top">
                        <Avatar alt="Flask" src={flaskLogo_1} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                    </Tooltip> */}
                        {/* <Tooltip title='Google Cloud' placement="bottom">
                        <Avatar alt="GCP" src={gcpLogo_1} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                    </Tooltip> */}
                        {/* <Tooltip title='APIGEE' placement="bottom">
                        <Avatar alt="apigee" src={apigeeLogo_1} variant="rounded" sx={{ width: { xs: 40, md: 50, lg: 60 }, height: { xs: 40, md: 50, lg: 60 } }} />
                    </Tooltip> */}
                    </Grid>
                </Box>
            </motion.div>
            
        </div>
    )
}

export default Skills