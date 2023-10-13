import React from 'react'
import { Typography, Grid, Box, useMediaQuery, useTheme } from '@mui/material'
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
import { timelineItemClasses } from '@mui/lab/TimelineItem';
import { motion } from "framer-motion"


const Resume = () => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div id="resume">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid Item>
                            <Typography sx={{ fontSize: { xs: 28, md: 29, lg: 30 }, color: '#97FEED' }}>Resume</Typography>
                        </Grid>
                        <Grid Item>
                            <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 30, md: 35, lg: 40 }, color: '#97FEED' }} />
                        </Grid>
                    </Grid>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 5 }}>
                            <Grid Item xs={6}>
                                <Typography textAlign='center' sx={{ fontSize: { xs: 23, md: 24, lg: 25 }, color: '#5CD2E6' }}>Work Experience</Typography>
                            </Grid>
                            <Grid Item xs={6}>
                                {
                                    isMatch ? (
                                        <Timeline sx={{
                                            [`& .${timelineItemClasses.root}:before`]: {
                                                flex: 0,
                                                padding: 0,
                                            },
                                        }}>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Software Engineer
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        August, 22 - Present
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Searce Inc.
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Python | FastAPI | Google Cloud Datastore | Django | Apigee | Cloud SQL | PandasAI
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Developed a Document Inventory Management System with Versioning for an automobile giant.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Currently working on the in-house product Recognic (recognic.ai), streamlining the enterprise's document processing lifecycle.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Successfully resolved critical issues, restoring the product's normal functioning.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Developed a system to extract useful information from CSV using LLMs and PandasAI.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Software Engineer Intern
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        Feb, 22 - July, 22
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Searce Inc.
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Python | FastAPI | Microsoft SQL Server | MySQL
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Contributed to a client project focused on database migration, from development to deployment.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Achieved certification as a Google Cloud - Associate Cloud Engineer.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Project Intern
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        July, 21 - December, 21
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Tejgyan Foundation (TCS-TGF)
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        HTML | CSS | Python | Flask
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked on the TGF Chatbot (Microsoft Bot Framework) with over 10,000 users.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Added various features / functionalities & improved accuracy from 70% to 95%.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Developed a Data Retrieval System, reducing manual efforts for internal staff.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Managed projects using development technologies like JIRA and Git within an Agile framework
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    ) : (
                                        <Timeline>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        August, 22 - Present
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Software Engineer
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Searce Inc.
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 11, md: 12, lg: 13 } }}>
                                                        Python | FastAPI | Google Cloud Datastore | Django | Apigee | Cloud SQL | PandasAI
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Developed a Document Inventory Management System with Versioning for an automobile giant.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Currently working on the in-house product Recognic (recognic.ai), streamlining the enterprise's document processing lifecycle.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Successfully resolved critical issues, restoring the product's normal functioning.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Developed a system to extract useful information from CSV using LLMs and PandasAI.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        Feb, 22 - July, 22
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Software Engineer Intern
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Searce Inc.
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 11, md: 12, lg: 13 } }}>
                                                        Python | FastAPI | Microsoft SQL Server | MySQL
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Contributed to a client project focused on database migration, from development to deployment.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Achieved certification as a Google Cloud - Associate Cloud Engineer.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        July, 21 - December, 21
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Project Intern
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        Tejgyan Foundation (TCS-TGF)
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary" sx={{ color: '#00ff00', fontSize: { xs: 11, md: 12, lg: 13 } }}>
                                                        HTML | CSS | Python | Flask
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Worked on the TGF Chatbot (Microsoft Bot Framework) with over 10,000 users.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Added various features / functionalities & improved accuracy from 70% to 95%.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Developed a Data Retrieval System, reducing manual efforts for internal staff.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                        <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                                Managed projects using development technologies like JIRA and Git within an Agile framework
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}>
                        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Grid Item xs={6}>
                                <Typography textAlign='center' sx={{ fontSize: { xs: 23, md: 24, lg: 25 }, color: '#5CD2E6' }}>Education</Typography>
                            </Grid>
                            <Grid Item xs={6} sx={{ width: '100%' }}>
                                {
                                    isMatch ? (
                                        <Timeline sx={{
                                            [`& .${timelineItemClasses.root}:before`]: {
                                                flex: 0,
                                                padding: 0,
                                            },
                                        }}>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Vishwakarma Institute of Information Technology, Pune
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 14, lg: 15 } }}>
                                                        2018 - 2022
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 13, md: 13, lg: 15 } }}>
                                                        B. Tech - Information Technology | CGPA: 9.35
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as Associate Documentation Head at EDC, VIIT | 2019-20
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Led the event named "BizzHour", a competition for young aspiring entrepreneurs, inspired from the popular TV series, Shark Tank | 2019-20
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as Startup Executive, Provided incubation to 10+ startups, organised inhouse Startup Competition named as "Genesis".
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as a Department Head at Industry Institute Interaction Cell (I2IC), a bridge between industry and college. Organised 5+ podcasts with the industry experts, helped students to gain the industry insights.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Narayana Junior College, Hyderabad
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 14, lg: 15 } }}>
                                                        2016 - 2018
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 13, md: 13, lg: 15 } }}>
                                                        HSC (Intermediate) - PCM | Marks (in %): 97.2
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 17, md: 18, lg: 20 } }}>
                                                        Jawahar Navodaya Vidyalaya, Parbhani
                                                    </Typography>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 14, lg: 15 } }}>
                                                        2015 - 2016
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 13, md: 13, lg: 15 } }}>
                                                        SSC (CBSE) | Marks (in %): 94.2
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Participated in Regional Table Tennis Meet (State level competition organised by Navodaya Vidyalaya Samiti) held at JNV Jalgaon | 2014-15
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Participated in Regional Table Tennis Meet (State level competition organised by Navodaya Vidyalaya Samiti) held at JNV Solapur | 2015-16
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    ) : (
                                        <Timeline>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        2018 - 2022
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Vishwakarma Institute of Information Technology, Pune
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        B. Tech - Information Technology | CGPA: 9.35
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as Associate Documentation Head at EDC, VIIT | 2019-20
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Led the event named "BizzHour", a competition for young aspiring entrepreneurs, inspired from the popular TV series, Shark Tank | 2019-20
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as Startup Executive, Provided incubation to 10+ startups, organised inhouse Startup Competition named as "Genesis".
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Worked as a Department Head at Industry Institute Interaction Cell (I2IC), a bridge between industry and college. Organised 5+ podcasts with the industry experts, helped students to gain the industry insights.
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        2016 - 2018
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Narayana Junior College, Hyderabad
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        HSC (Intermediate) - PCM | Marks (in %): 97.2
                                                    </Typography>
                                                </TimelineContent>
                                            </TimelineItem>
                                            <TimelineItem>
                                                <TimelineOppositeContent>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 13, md: 14, lg: 15 } }}>
                                                        2015 - 2016
                                                    </Typography>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent sx={{ mb: 4 }}>
                                                    <Typography sx={{ color: 'white', fontSize: { xs: 15, md: 18, lg: 20 } }}>
                                                        Jawahar Navodaya Vidyalaya, Parbhani
                                                    </Typography>
                                                    <Typography sx={{ color: '#00ff00', fontSize: { xs: 12, md: 13, lg: 15 } }}>
                                                        SSC (CBSE) | Marks (in %): 94.2
                                                    </Typography>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row', mt: 3 }}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Participated in Regional Table Tennis Meet (State level competition organised by Navodaya Vidyalaya Samiti) held at JNV Jalgaon | 2014-15
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid sx={{ display: 'flex', flexDirection: 'row'}}>
                                                        <Grid Item>
                                                            <NavigateNextIcon sx={{ color: 'white' }} />
                                                        </Grid>
                                                        <Grid Item>
                                                            <Typography sx={{ color: 'white', fontSize: { xs: 14, md: 15, lg: 15 } }}>
                                                                Participated in Regional Table Tennis Meet (State level competition organised by Navodaya Vidyalaya Samiti) held at JNV Solapur | 2015-16
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Timeline>
                                    )
                                }
                            </Grid>
                        </Grid>
                    </motion.div>
                </Box>
            </motion.div>
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
        </div>
    )
}

export default Resume