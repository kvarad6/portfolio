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
        <>
            <Box>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid Item>
                        <Typography sx={{ fontSize: 40, color: '#64CCC5' }}>Projects</Typography>
                    </Grid>
                    <Grid Item>
                        <HorizontalRuleRoundedIcon fontSize='large' />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    <Grid Item xs={4}>
                        <Card sx={{
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpen(true)}>
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
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
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
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard2(true)}>
                            <CardActionArea>
                                <CardContent sx={{ m: 3 }}>
                                    <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                        Recommendation System
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                        Python | Machine Learning
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://ssrn.com/abstract=3833762" target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            fontSize: 30, color: 'black', ':hover': {
                                                transition: '0.4s',
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://github.com/kvarad6/Recommendation-System-for-Workers-Customers" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            fontSize: 30, color: 'black', ':hover': {
                                                transition: '0.4s',
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                </CardActions>

                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid Item xs={4}>
                        {/* <Card sx={{
                            maxWidth: 345, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            } */}
                        <Card sx={{
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard3(true)}>
                            <CardActionArea>
                                <CardContent sx={{ m: 3 }}>
                                    <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                        Portfolio
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                        React | Material UI | HTML | CSS | Javascript
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://drive.google.com/file/d/1gsrzW73SJIHX9vQCh4T5qErA7imSp1-x/view?usp=sharing" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
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
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard4(true)}>
                            <CardActionArea>
                                <CardContent sx={{ m: 3 }}>
                                    <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                        PandasAI
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                        Python | PandasAI | Streamlit | Git
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href=" " target="_blank">
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://github.com/kvarad6/PandasAI" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
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
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpenCard5(true)}>
                            <CardActionArea>
                                <CardContent sx={{ m: 3 }}>
                                    <Typography gutterBottom variant="h5" textAlign='center' sx={{ color: 'white' }}>
                                        Checkout Form
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center' sx={{ color: '#00ff00' }}>
                                        HTML | CSS | Javascript | React | Material UI | Git
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" textAlign='center'>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <Link href="https://github.com/kvarad6/checkout-form" target="_blank">
                                        <GitHubIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href="https://kvarad6.github.io/checkout-form/" target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
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
                            height: 220, width: 350, backgroundColor: '#0A4D68', borderRadius: 3, ':hover': {
                                boxShadow: 20, // theme.shadows[20]
                                color: 'white'
                            }
                        }} onClick={() => setOpen(true)}>
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
                                        <DescriptionIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
                                                color: 'white'
                                            }
                                        }} />
                                    </Link>
                                    <Link href=" " target="_blank">
                                        <OpenInNewIcon fontSize='large' sx={{
                                            transition: '0.4s',
                                            fontSize: 30, color: 'black', ':hover': {
                                                boxShadow: 20, // theme.shadows[20]
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
                <DialogTitle textAlign='center'>College Enquiry Chatbot</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
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
            <Dialog open={openCard2} onClose={() => setOpenCard2(false)}>
                <DialogTitle textAlign='center'>Recommendation System for Workers & Customers for Informal Jobs</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Developed a recommendation system for small skilled workers such as carpenters, plumbers, etc.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        The research paper, proposing the AI model, has been published in the Elsevier SSRN Reputed Series.
                    </DialogContentText>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        Tools & Technologies used: Python, Machine Learning (Content-Based Filtering)
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard3} onClose={() => setOpenCard3(false)}>
                <DialogTitle textAlign='center'>Portfolio</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard4} onClose={() => setOpenCard4(false)}>
                <DialogTitle textAlign='center'>PandasAI</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
            <Dialog open={openCard5} onClose={() => setOpenCard5(false)}>
                <DialogTitle textAlign='center'>Checkout Form</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ display: 'flex', flexDirection: 'row' }}>
                        <KeyboardArrowRightIcon />
                        xyzzz
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Projects