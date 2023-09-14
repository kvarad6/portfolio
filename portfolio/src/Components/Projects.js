import React, { useState } from 'react'
import { Typography, Grid, CardContent, Card, CardActions, CardActionArea, Dialog, DialogTitle, DialogContent, DialogContentText, Link} from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Projects = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ fontSize: 40 }}>Projects</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{m:3}}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{color:'white'}}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{display: 'flex', flexDirection:'row', justifyContent:'center'}}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color:'black' }} />
                                </Link>
                            </CardActions>
                            
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{ m: 3 }}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                            </CardActions>

                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{ m: 3 }}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                            </CardActions>

                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{ m: 3 }}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                            </CardActions>

                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{ m: 3 }}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                            </CardActions>

                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid Item xs={4}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#2f6163', borderRadius: 10 }} onClick={() => setOpen(true)}>
                        <CardActionArea>
                            <CardContent sx={{ m: 3 }}>
                                <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                    College Enquiry Chatbot
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                    Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign='center'>
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                    <DescriptionIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                                <Link href=" " target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{ fontSize: 30, color: 'black' }} />
                                </Link>
                            </CardActions>

                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle textAlign='center'>College Enquiry Chatbot</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{display:'flex', flexDirection:'row'}}>
                        <KeyboardArrowRightIcon />
                        Developed and deployed a chatbot for college website (viit.ac.in).
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Purpose was to assist college management authorities in resolving the query of parents, & students.   
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Copyright for the chatbot has been granted by the Government of India on 17th of May, 2021. 
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Tools & Technologies used: Microsoft Bot Framework, NodeJS, MongoDB, Git, JIRA                    
                    </DialogContentText>

                </DialogContent>
            </Dialog>
        </>
    )
}

export default Projects