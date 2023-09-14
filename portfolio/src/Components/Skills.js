import React from 'react'
import { Typography, Grid, Avatar } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import cLogo from '../static/images/logo/cLogo.png'
import htmlLogo from '../static/images/logo/htmlLogo.png'
import cssLogo from '../static/images/logo/cssLogo.png'
import githubLogo from '../static/images/logo/githubLogo.png'
import gitLogo from '../static/images/logo/gitLogo.png'
import pythonLogo from '../static/images/logo/pythonLogo.png'
import fastapiLogo from '../static/images/logo/fastapiLogo.png'
import jiraLogo from '../static/images/logo/jiraLogo.png'
import nodeLogo from '../static/images/logo/nodeLogo.png'


const Skills = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ textAlign: 'center', fontSize: 40 }}>My Tech Stack</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large'/>
                </Grid>
            </Grid>
            <Grid sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 4, m:4}}>
                <Grid item xs={2}>
                    <Avatar alt="C" src={cLogo} sx={{ width: 60, height: 60 }}/>
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="HTML" src={htmlLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="CSS" src={cssLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Github" src={githubLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Git" src={gitLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Python" src={pythonLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 4, m:6 }}>
                <Grid item xs={2}>
                    <Avatar alt="FastAPI" src={fastapiLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="JIRA" src={jiraLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Node JS" src={nodeLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Searce Inc" src={cLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Searce Inc" src={cLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
                <Grid item xs={2}>
                    <Avatar alt="Searce Inc" src={cLogo} sx={{ width: 60, height: 60 }} />
                </Grid>
            </Grid>
        </>
    )
}

export default Skills