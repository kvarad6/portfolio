import React from 'react'
import { Typography, Grid } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


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
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                <Grid Item xs={6}>
                    <Typography textAlign='center' sx={{ fontSize: 30, color: '#3AA6B9' }}>Work Experience</Typography>
                </Grid>
                <Grid Item xs={6}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    August, 22 - Present
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Software Engineer
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    Searce Inc.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                    Python | FastAPI | Google Cloud Datastore | Django | Apigee | Cloud SQL | PandasAI
                                </Typography>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Developed document version control management system for a client.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Currently working on a product that streamlines the enterprise's document processing lifecycle.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Thoroughly fixed a number of issues and restored the product's normal functioning.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Developed a system to extract useful information from CSV using LLMs and PandasAI.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    Feb, 22 - July, 22
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Software Engineer Intern
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    Searce Inc.
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                    Python | FastAPI | Microsoft SQL Server | MySQL
                                </Typography>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Developed & Deployed a client project based on database migration.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Certified with Google Cloud - Associate Cloud Engineer.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    July, 21 - December, 21
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Project Intern
                                </Typography>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    Tejgyan Foundation (TCS-TGF)
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: 13 }}>
                                    HTML | CSS | Python | Flask
                                </Typography>
                                <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Worked on TGF Chatbot (Microsoft Bot Framework) that has over 10,000 users.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Added various features / functionalities & improved accuracy from 70% to 95%.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Developed a Data Retrieval System which drastically reduced the manual efforts of the internal staff.
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Grid Item>
                                        <NavigateNextIcon sx={{ color: 'white' }} />
                                    </Grid>
                                    <Grid Item>
                                        <Typography sx={{ color: 'white', fontSize: 15 }}>
                                            Managed & maintained the progress using development technologies such as JIRA & Git with Agile.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item xs={6}>
                    <Typography textAlign='center' sx={{ fontSize: 30, color: '#3AA6B9' }}>Education</Typography>
                </Grid>
                <Grid Item xs={6} sx={{ width: '100%' }}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    2018 - 2022
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Vishwakarma Institute of Information Technology, Pune
                                </Typography>
                                <Typography sx={{ color: '#00ff00', fontSize: 15 }}>
                                    B. Tech - Information Technology | CGPA: 9.35
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    2016 - 2018
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Narayana Junior College, Hyderabad
                                </Typography>
                                <Typography sx={{ color: '#00ff00', fontSize: 15 }}>
                                    HSC (Intermediate) - PCM | Marks (in %): 97.2
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography sx={{ color: 'white', fontSize: 15 }}>
                                    2015 - 2016
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ mb: 4 }}>
                                <Typography sx={{ color: 'white', fontSize: 20 }}>
                                    Jawahar Navodaya Vidyalaya, Parbhani
                                </Typography>
                                <Typography sx={{ color: '#00ff00', fontSize: 15 }}>
                                    SSC (CBSE) | Marks (in %): 94.2
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
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