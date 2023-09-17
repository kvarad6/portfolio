import React from 'react'
import { Typography, Grid, Avatar } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import Tooltip from '@mui/material/Tooltip';
import cLogo from '../static/images/logo/cLogo.png'
import htmlLogo from '../static/images/logo/htmlLogo.png'
import cssLogo from '../static/images/logo/cssLogo.png'
import githubLogo from '../static/images/logo/githubLogo.png'
import gitLogo from '../static/images/logo/gitLogo.png'
import pythonLogo from '../static/images/logo/pythonLogo.png'
import fastapiLogo from '../static/images/logo/fastapiLogo.png'
import jiraLogo from '../static/images/logo/jiraLogo.png'
import nodeLogo from '../static/images/logo/nodeLogo.png'
import muiLogo from '../static/images/logo/muiLogo.png'
import flaskLogo from '../static/images/logo/flaskLogo.png'
import apigeeLogo from '../static/images/logo/apigeeLogo.png'
import mongodbLogo from '../static/images/logo/mongodbLogo.png'
import gcpLogo from '../static/images/logo/gcpLogo.png'
import djangoLogo from '../static/images/logo/djangoLogo.png'



const Skills = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ textAlign: 'center', fontSize: 40, color: '#64CCC5' }}>My Tech Stack</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 8, m: 4 }}>
                <Grid item xs={2}>
                    <Tooltip title='C' placement="top">
                        <Avatar alt="C" src={cLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='HTML' placement="top">
                        <Avatar alt="HTML" src={htmlLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='CSS' placement="top">
                        <Avatar alt="CSS" src={cssLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Github' placement="top">
                        <Avatar alt="Github" src={githubLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Git' placement="top">
                        <Avatar alt="Git" src={gitLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Python' placement="top">
                        <Avatar alt="Python" src={pythonLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Flask' placement="top">
                        <Avatar alt="Flask" src={flaskLogo} variant="rounded" sx={{ width: 60, height: 80 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Django' placement="top">
                        <Avatar alt="Django" src={djangoLogo} variant="rounded" sx={{ width: 65, height: 80 }} />
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 8, m: 6 }}>
                <Grid item xs={2}>
                    <Tooltip title='FastAPI' placement="bottom">
                        <Avatar alt="FastAPI" src={fastapiLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='JIRA' placement="bottom">
                        <Avatar alt="JIRA" src={jiraLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Node JS' placement="bottom">
                        <Avatar alt="Node JS" src={nodeLogo} variant="rounded" sx={{ width: 60, height: 70 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='MUI' placement="bottom">
                        <Avatar alt="MUI" src={muiLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Google Cloud' placement="bottom">
                        <Avatar alt="GCP" src={gcpLogo} variant="rounded" sx={{ width: 80, height: 63 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='MongoDB' placement="bottom">
                        <Avatar alt="MongoDB" src={mongodbLogo} variant="rounded" sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='APIGEE' placement="bottom">
                        <Avatar alt="apigee" src={apigeeLogo} variant="rounded" sx={{ width: 190, height: 65 }} />
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    )
}

export default Skills