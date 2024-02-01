import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { CardContent, Card, CardActions, Link, CardMedia } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IEEE_Certificate from '../static/images/publications/IEEE_Certificate.jpg'
import ICICC_Certificate from '../static/images/publications/ICICC_Certificate.jpg'
import { motion } from "framer-motion"


const PublicationCard = ({ image, title, description, link }) => (
    <Grid item xs={6}>
        <Card sx={{ backgroundColor: '#0A4D68', width: { xs: 300, md: 300, lg: 300 }, height: { xs: 310, md: 320, lg: 340 } }}>
            <CardMedia
                sx={{ width: { xs: 300, md: 300, lg: 300 }, height: { xs: 210, md: 220, lg: 240 } }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography textAlign='center' sx={{ color: 'white', fontSize: { xs: 16, md: 17, lg: 18 } }}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Link href={link} target="_blank">
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
)


const Publications = () => {
    const publications = [
        {
            image: IEEE_Certificate,
            title: 'IEEE Certificate',
            description: 'ICAISS - 2022',
            link: 'https://ieeexplore.ieee.org/document/10010749',
        },
        {
            image: ICICC_Certificate,
            title: 'ICICC Certificate',
            description: 'ICICC - 2021',
            link: 'https://ssrn.com/abstract=3833762',
        },
    ];
    return (
        <div id="publications">
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Grid item>
                            <Typography sx={{ fontSize: { xs: 28, md: 29, lg: 30 }, color: '#97FEED' }}>Publications</Typography>
                        </Grid>
                        <Grid item>
                            <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 30, md: 35, lg: 40 }, color: '#97FEED' }} />
                        </Grid>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                        {publications.map((publication, index) => (
                            <PublicationCard key={index} {...publication} />
                        ))}
                    </Grid>
                </Box>
            </motion.div>
        </div>
    )
}

export default Publications