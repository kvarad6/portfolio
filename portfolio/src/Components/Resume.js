import React from 'react'
import { Typography, Grid, ListItemButton } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import tejgyanLogo from '../static/images/avatar/tejgyanLogo.png'
import searceLogoBlack from '../static/images/avatar/searceLogoBlack.png'
import viitLogo from '../static/images/avatar/viitLogo.png'
import narayanaLogoBlack from '../static/images/avatar/narayanaLogoBlack.png'
import jnvLogo from '../static/images/avatar/jnvLogo.png'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'




const Resume = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ fontSize: 40, color: '#64CCC5' }}>Resume</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                <Grid Item xs={6} sx={{ width: 400 }}>
                    <Typography textAlign='center' sx={{ fontSize: 30, mb: 3, color: '#3AA6B9' }}>Work Experience</Typography>
                    {/* <List sx={{ width: '100%', bgcolor: '#2f6163'}}> */}
                    <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                        <ListItemButton onClick={() => setOpen(true)}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Searce Inc" src={searceLogoBlack} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography sx={{ color: 'white' }}>
                                        Software Engineer
                                    </Typography>
                                    <Typography sx={{ color: 'white', fontSize: 13 }}>
                                        August, 22 - Present
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                        Python | FastAPI | Google Cloud Datastore | Django | Apigee | Cloud SQL | PandasAI
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </ListItemButton>
                        <Divider variant="middle" />
                        <ListItemButton>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Searce Inc" src={searceLogoBlack} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography sx={{ color: 'white' }}>
                                        Software Engineer Intern
                                    </Typography>
                                    <Typography sx={{ color: 'white', fontSize: 13 }}>
                                        Feb, 22 - July, 22
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                        Python | FastAPI | Microsoft SQL Server | MySQL
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </ListItemButton>
                        <Divider variant="middle" />
                        <ListItemButton>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Searce Inc" src={tejgyanLogo} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                                </ListItemAvatar>
                                <ListItemText>
                                    <Typography sx={{ color: 'white' }}>
                                        Project Intern
                                    </Typography>
                                    <Typography sx={{ color: 'white', fontSize: 13 }}>
                                        July, 21 - December, 21
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                        HTML | CSS | Python | Flask
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </ListItemButton>
                    </List>
                </Grid>
                <Grid Item xs={6} sx={{ width: 400 }}>
                    <Typography textAlign='center' sx={{ fontSize: 30, mb: 3, color: '#3AA6B9' }}>Education</Typography>
                    <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                        <ListItem sx={{m:1}}>
                            <ListItemAvatar>
                                <Avatar alt="Searce Inc" src={viitLogo} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography sx={{ color: 'white' }}>
                                    Vishwakarma Institute of Information Technology, Pune
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    2018 - 2022
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    B. Tech - Information Technology | CGPA: 9.35
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem sx={{ m: 1 }}>
                            <ListItemAvatar>
                                <Avatar alt="Searce Inc" src={narayanaLogoBlack} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography sx={{ color: 'white' }}>
                                    Narayana Junior College, Hyderabad
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    2016 - 2018
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    HSC (Intermediate) - PCM | Marks (in %): 97.2
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <Divider variant="middle" />
                        <ListItem sx={{ m: 1 }}>
                            <ListItemAvatar>
                                <Avatar alt="Searce Inc" src={jnvLogo} sx={{ bgcolor: 'black', width: 45, height: 45 }} />
                            </ListItemAvatar>
                            <ListItemText>
                                <Typography sx={{ color: 'white' }}>
                                    Jawahar Navodaya Vidyalaya, Parbhani
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    2015 - 2016
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 13 }}>
                                    SSC (CBSE) | Marks (in %): 94.2
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle textAlign='center'>Software Engineer @ Searce Inc</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Developed document version control management system for a client.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Currently working on a product that streamlines the enterprise's document processing lifecycle.                    
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Thoroughly fixed a number of issues and restored the product's normal functioning.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Developed a system to extract useful information from CSV using LLMs and PandasAI.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Technologies used: Python, FastAPI, Google Cloud Datastore, Django, Apigee, Cloud SQL, PandasAI                    
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Resume