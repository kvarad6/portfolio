import { Typography, Grid} from '@mui/material'
import React from 'react'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';

const AboutMe = () => {
  return (
    <>
        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Grid Item>
                <Typography sx={{fontSize: 40 }}>About Me</Typography>
            </Grid>
            <Grid Item>
                  <HorizontalRuleRoundedIcon fontSize='large' />
            </Grid>
            <Grid Item>
                  <Typography variant="subtitle1" sx={{ textAlign: 'center', ml: 40, mr: 40, mt: 4 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.</Typography>
            </Grid>
        </Grid>
    </>
  )
}

export default AboutMe