import React from 'react'
import { Typography, Grid } from '@mui/material'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';


const Resume = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item>
                    <Typography sx={{ fontSize: 40 }}>Resume</Typography>
                </Grid>
                <Grid Item>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            <Grid sx={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly'}}>
                <Grid Item xs={6}>
                    <Typography sx={{ fontSize: 30 }}>Work Experience</Typography>
                </Grid>
                <Grid Item xs={6}>
                    <Typography sx={{ fontSize: 30 }}>Education</Typography>
                </Grid>
            </Grid>
            {/* <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <Grid Item xs={6}>
                    <List>
                        <ListItem>
                            <ListItemText>Searce Inc.</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
                <Grid Item xs={6}>
                    <List>
                        <ListItem>
                            <ListItemText>ewrfre</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            </Grid> */}
        </>
    )
}

export default Resume