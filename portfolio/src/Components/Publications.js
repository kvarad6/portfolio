import React from 'react'
import { Typography, Grid, Box } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import { CardContent, Card, CardActions, Link, CardMedia } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IEEE_Certificate from '../static/images/publications/IEEE_Certificate.jpg'
import ICICC_Certificate from '../static/images/publications/ICICC_Certificate.jpg'

const Publications = () => {
    return (
        <div id="publications">
            <Box>
                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Grid Item>
                        <Typography sx={{ fontSize: { xs: 28, md: 29, lg: 30 }, color: '#97FEED' }}>Publications</Typography>
                    </Grid>
                    <Grid Item>
                        <HorizontalRuleRoundedIcon sx={{ fontSize: { xs: 20, md: 30, lg: 40 } }} />
                    </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                    <Grid Item xs={6}>
                        <Card sx={{ backgroundColor: '#0A4D68', width: { xs: 300, md: 300, lg: 300 }, height: { xs: 310, md: 320, lg: 340 } }}>
                            <CardMedia
                                sx={{ width: { xs: 300, md: 300, lg: 300 }, height: { xs: 210, md: 220, lg: 240 } }}
                                image={IEEE_Certificate}
                                title="IEEE Certificate"
                            />
                            <CardContent>
                                <Typography textAlign='center' sx={{ color: 'white', fontSize: { xs: 16, md: 17, lg: 18 } }}>
                                    ICAISS - 2022
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://ieeexplore.ieee.org/document/10010749" target="_blank">
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
                                image={ICICC_Certificate}
                                title="ICICC Certificate"
                            />
                            <CardContent>
                                <Typography variant="h6" textAlign='center' sx={{ color: 'white', fontSize: { xs: 16, md: 17, lg: 18 } }}>
                                    ICICC - 2021
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                <Link href="https://ssrn.com/abstract=3833762" target="_blank">
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
        </div>
    )
}

export default Publications