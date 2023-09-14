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
import mysqlLogo from '../static/images/logo/mysqlLogo.png'
import mongodbLogo from '../static/images/logo/mongodbLogo.png'


const Skills = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ textAlign: 'center', fontSize: 40 }}>My Tech Stack</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 4, m: 4 }}>
                <Grid item xs={2}>
                    <Tooltip title='C' placement="top">
                        <Avatar alt="C" src={cLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='HTML' placement="top">
                        <Avatar alt="HTML" src={htmlLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='CSS' placement="top">
                        <Avatar alt="CSS" src={cssLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Github' placement="top">
                        <Avatar alt="Github" src={githubLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Git' placement="top">
                        <Avatar alt="Git" src={gitLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Python' placement="top">
                        <Avatar alt="Python" src={pythonLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 4, m: 6 }}>
                <Grid item xs={2}>
                    <Tooltip title='FastAPI' placement="bottom">
                        <Avatar alt="FastAPI" src={fastapiLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='JIRA' placement="bottom">
                        <Avatar alt="JIRA" src={jiraLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='Node JS' placement="bottom">
                        <Avatar alt="Node JS" src={nodeLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='MUI' placement="bottom">
                        <Avatar alt="MUI" src={muiLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='MySQL' placement="bottom">
                        <Avatar alt="MySQL" src={mysqlLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title='MongoDB' placement="bottom">
                        <Avatar alt="MongoDB" src={mongodbLogo} sx={{ width: 60, height: 60 }} />
                    </Tooltip>
                </Grid>
            </Grid>
        </>
    )
}

export default Skills