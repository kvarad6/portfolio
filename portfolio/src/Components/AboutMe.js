import { Typography, Grid } from '@mui/material'
import React from 'react'
import HorizontalRuleRoundedIcon from '@mui/icons-material/HorizontalRuleRounded';
import Avatar from '@mui/material/Avatar';
import coderLogo from '../static/images/timeline/coderLogo.png'
import photography from '../static/images/timeline/photography.png'
import milestone from '../static/images/timeline/milestone.png'
import handshake from '../static/images/timeline/handshake.png'
import sports from '../static/images/timeline/sports.png'
import hi from '../static/images/timeline/hi.png'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const AboutMe = () => {
    return (
        <>
            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grid Item xs={12}>
                    <Typography sx={{ textAlign: 'center', fontSize: 40, color: '#64CCC5'}}>About Me</Typography>
                </Grid>
                <Grid Item xs={12}>
                    <HorizontalRuleRoundedIcon fontSize='large' />
                </Grid>
            </Grid>
            {/* <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 5, ml: 45, mr: 45, textAlign: 'justify' }}>
                <Grid Item xs={4}>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9'}}>
                        Hey there! Thanks for stopping by my little corner of the internet. I'm Varad Kulkarni, a passionate software engineer who has been riding the IT rollercoaster for a thrilling year now. 🖥️ My journey in the world of technology has been nothing short of exhilarating, and I'm here to share a glimpse of my story with you.</Typography>
                </Grid>
                <Grid Item>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                        👩‍💻 Code Whisperer: In the realm of ones and zeros, I'm the code whisperer, crafting digital wonders and solving real-world puzzles. Whether it's crafting elegant algorithms or building robust applications, I thrive on the thrill of creating software that makes lives easier and more efficient. 💻</Typography>
                </Grid>
                <Grid Item>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                        🏀 Sports Enthusiast: When I'm not immersed in lines of code, you'll likely find me on the field, court, or track, chasing that adrenaline rush. Sports are my sanctuary, where I push my limits, foster teamwork, and savor the sweet taste of victory. From basketball's swish to the thrill of a finish line, I'm always up for the challenge. 🏆 </Typography>
                </Grid>
                <Grid Item>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                        📷 Capturing Moments: Beyond the digital world, I have a deep appreciation for capturing life's precious moments through the lens. Photography is my way of freezing time and sharing stories through visuals. Whether it's a breathtaking sunset or candid shots of friends, I believe every picture has a unique tale to tell. 📸</Typography>
                </Grid>
                <Grid Item>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                        🎈 Celebrating Milestones:As I celebrate my first year in the IT industry, I can't help but feel grateful for the incredible opportunities, the fantastic people I've met, and the growth I've experienced. The future holds limitless possibilities, and I'm excited to continue this amazing journey, turning code into innovation and dreams into reality. </Typography>
                </Grid>
                <Grid Item>
                    <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                        🌐 Let's Connect: If you share my passion for technology, the thrill of sports, or the art of storytelling through photography, let's connect and embark on new adventures together. Whether it's collaborating on a coding project, hitting the sports field, or exploring the world through a camera lens, I'm always up for the next great adventure. </Typography>
                </Grid>
            </Grid> */}
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={hi} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb:4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Hey there! Thanks for stopping by my little corner of the internet. I'm Varad Kulkarni, a passionate software engineer who has been riding the IT rollercoaster for a thrilling year now. 🖥️ My journey in the world of technology has been nothing short of exhilarating, and I'm here to share a glimpse of my story with you.</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={coderLogo} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Code Whisperer: In the realm of ones and zeros, I'm the code whisperer, crafting digital wonders and solving real-world puzzles. Whether it's crafting elegant algorithms or building robust applications, I thrive on the thrill of creating software that makes lives easier and more efficient. 💻</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={sports} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Sports Enthusiast: When I'm not immersed in lines of code, you'll likely find me on the field, court, or track, chasing that adrenaline rush. Sports are my sanctuary, where I push my limits, foster teamwork, and savor the sweet taste of victory. From basketball's swish to the thrill of a finish line, I'm always up for the challenge. 🏆 </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={photography} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Capturing Moments: Beyond the digital world, I have a deep appreciation for capturing life's precious moments through the lens. Photography is my way of freezing time and sharing stories through visuals. Whether it's a breathtaking sunset or candid shots of friends, I believe every picture has a unique tale to tell. 📸</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={milestone} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Celebrating Milestones:As I celebrate my first year in the IT industry, I can't help but feel grateful for the incredible opportunities, the fantastic people I've met, and the growth I've experienced. The future holds limitless possibilities, and I'm excited to continue this amazing journey, turning code into innovation and dreams into reality. </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot>
                            <Avatar src={handshake} />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ mb: 4 }}>
                        <Typography variant="subtitle1" sx={{ color: '#3AA6B9' }}>
                            Let's Connect: If you share my passion for technology, the thrill of sports, or the art of storytelling through photography, let's connect and embark on new adventures together. Whether it's collaborating on a coding project, hitting the sports field, or exploring the world through a camera lens, I'm always up for the next great adventure. </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default AboutMe