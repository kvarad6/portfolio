import React, { useState } from 'react'
import { Box, Typography, Grid, CardContent, Card, CardActions, CardActionArea, Dialog, DialogTitle, DialogContent, DialogContentText, Link } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DescriptionIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [openCard2, setOpenCard2] = useState(false);
    const [openCard3, setOpenCard3] = useState(false);
    const [openCard4, setOpenCard4] = useState(false);
    const [openCard5, setOpenCard5] = useState(false);

    return (
        <div id="projects">
            <Box>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid Item>
                        <Typography sx={{ fontSize: { xs: 28, md: 30, lg: 33 }, color: '#97FEED' }}>Projects</Typography>
                    </Grid>
                    <Grid Item>
                        <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 20, md: 30, lg: 40 } }} />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpen(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ fontSize: { xs: 18, md: 20, lg: 21 }, color: 'white' }}>
                                        College Enquiry Chatbot
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard2(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ fontSize: { xs: 18, md: 20, lg: 21 }, color: 'white' }}>
                                        Recommendation System
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        Python | Machine Learning
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: 4 }}>
                                    <Link href="https://ssrn.com/abstract=3833762" target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                transition: '0.4s',
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://github.com/kvarad6/Recommendation-System-for-Workers-Customers" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                transition: '0.4s',
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard3(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ fontSize: { xs: 18, md: 20, lg: 21 }, color: 'white' }}>
                                        Portfolio
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        React | Material UI | HTML | CSS | Javascript
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard4(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ color: 'white', fontSize: { xs: 18, md: 20, lg: 21 } }}>
                                        PandasAI
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        Python | PandasAI | Streamlit | Git
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', mb: 3 }}>
                                    <Link href=" " target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://github.com/kvarad6/PandasAI" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard5(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ fontSize: { xs: 18, md: 20, lg: 21 }, color: 'white' }}>
                                        Checkout Form
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        HTML | CSS | Javascript | React | Material UI | Git
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://github.com/kvarad6/checkout-form" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://kvarad6.github.io/checkout-form/" target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 }, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20,
                                color: 'white'
                            }
                        }} onClick={() => setOpen(true)}>
                            <CardActionArea sx={{ height: { xs: 160, md: 180, lg: 230 }, width: { xs: 280, md: 300, lg: 350 } }}>
                                <CardContent sx={{ m: { xs: 1, md: 2, lg: 3 } }}>
                                    <Typography gutterBottom textAlign='center' sx={{ fontSize: { xs: 18, md: 20, lg: 21 }, color: 'white' }}>
                                        College Enquiry Chatbot
                                    </Typography>
                                    <Typography textAlign='center' sx={{ fontSize: { xs: 12, md: 13, lg: 14 }, color: '#00ff00' }}>
                                        Microsoft Bot Framework | NodeJS | MongoDB | Git | JIRA
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                                boxShadow: 20,
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </ Box>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogTitle textAlign='center' sx={{ fontSize: { xs: 20, md: 23, lg: 25 } }}>College Enquiry Chatbot</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Developed and deployed a chatbot for college website (viit.ac.in).
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Purpose was to assist college management authorities in resolving the query of parents, & students.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Copyright for the chatbot has been granted by the Government of India on 17th of May, 2021.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Tools & Technologies used: Microsoft Bot Framework, NodeJS, MongoDB, Git, JIRA
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard2} onClose={() => setOpenCard2(false)}>
                <DialogTitle textAlign='center' sx={{ fontSize: { xs: 20, md: 23, lg: 25 } }}>Recommendation System for Workers & Customers for Informal Jobs</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Developed a recommendation system for small skilled workers such as carpenters, plumbers, etc.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        The research paper, proposing the AI model, has been published in the Elsevier SSRN Reputed Series.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        Tools & Technologies used: Python, Machine Learning (Content-Based Filtering)
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard3} onClose={() => setOpenCard3(false)}>
                <DialogTitle textAlign='center' sx={{ fontSize: { xs: 20, md: 23, lg: 25 } }}>Portfolio</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard4} onClose={() => setOpenCard4(false)}>
                <DialogTitle textAlign='center' sx={{ fontSize: { xs: 20, md: 23, lg: 25 } }}>PandasAI</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard5} onClose={() => setOpenCard5(false)}>
                <DialogTitle textAlign='center' sx={{ fontSize: { xs: 20, md: 23, lg: 25 } }}>Checkout Form</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row', fontSize: { xs: 14, md: 15, lg: 16 } }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Projects