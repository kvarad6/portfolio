import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { CardContent, Card, CardActions, Link, CardMedia } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ACE from '../static/images/certificates/ACE.png'
import GenAI from '../static/images/certificates/GenAI.png'
import { motion } from "framer-motion"



const Certifications = () => {
    return (
        <div id="certifications">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
            <Box>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid Item>
                        <Typography sx={{ fontSize: { xs: 28, md: 29, lg: 30 }, color: '#97FEED' }}>Certifications</Typography>
                    </Grid>
                    <Grid Item>
                        <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 30, md: 35, lg: 40 }, color: '#97FEED'}} />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    <Grid Item xs={6}>
                        <Card sx={{ backgroundColor: '#0A4D68', width: { xs: 300, md: 300, lg: 300 }, height: { xs: 310, md: 320, lg: 340 } }}>
                            <CardMedia
                                sx={{ width: { xs: 300, md: 300, lg: 300 }, height: { xs: 210, md: 220, lg: 240 } }}
                                image={ACE}
                                title="ACE Certificate"
                            />
                            <CardContent>
                                <Typography textAlign='center' sx={{ color: 'white', fontSize: { xs: 16, md: 17, lg: 18 } }}>
                                    Associate Cloud Engineer
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://www.credential.net/4d6758ac-54eb-471d-8d12-3d0f4f663773" target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{
                                        transition: '0.4s',
                                        fontSize: { xs: 20, md: 22, lg: 25 }, color: '#97FEED', ':hover': {
                                            boxShadow: 20, // theme.shadows[20]
                                            color: 'white'
                                        }
                                    }} />
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid Item xs={6}>
                        <Card sx={{ backgroundColor: '#0A4D68', width: { xs: 300, md: 300, lg: 300 }, height: { xs: 310, md: 320, lg: 340 } }}>
                            <CardMedia
                                sx={{ width: { xs: 300, md: 300, lg: 300 }, height: { xs: 210, md: 220, lg: 240 } }}
                                image={GenAI}
                                title="GenAI Badges"
                            />
                            <CardContent>
                                <Typography variant="h6" textAlign='center' sx={{ color: 'white', fontSize: { xs: 16, md: 17, lg: 18 } }}>
                                    GenAI Badges & Certifications
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://partner.cloudskillsboost.google/public_profiles/9ea48476-ca51-4dca-8992-622ba244b3c7" target="_blank">
                                    <OpenInNewIcon fontSize='large' sx={{
                                        transition: '0.4s',
                                        fontSize: { xs: 20, md: 22, lg: 25 },
                                        color: '#97FEED', ':hover': {
                                            boxShadow: 20, // theme.shadows[20]
                                            color: 'white'
                                        }
                                    }} />
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            </motion.div>
        </div>
    )
}

export default Certifications