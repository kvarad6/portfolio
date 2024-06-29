import React from 'react';
import { Grid, Typography, Link, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from 'framer-motion';

const SocialLink = ({ href, icon, color }) => (
    <Grid item xs={3}>
        <Link href={href} target="_blank">
            {React.cloneElement(icon, {
                fontSize: 'large',
                sx: {
                    transition: '0.4s',
                    color: '#5CD2E6',
                    ':hover': {
                        boxShadow: 20,
                        color: 'white',
                    },
                },
            })}
        </Link>
    </Grid>
);

const socialLinks = [
    { href: 'https://www.linkedin.com/in/varad-kulkarni-2001/', icon: <LinkedInIcon /> },
    { href: 'https://www.instagram.com/_varad.kulkarni_/', icon: <InstagramIcon /> },
    { href: 'https://github.com/kvarad6', icon: <GitHubIcon /> },
    { href: 'mailto:varadkulkarni.connect@gmail.com', icon: <EmailIcon /> },
];

const ContactMe = () => {
    return (
        <div id="contacts">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <Box>
                    <Typography
                        sx={{ textAlign: 'center', fontSize: { xs: 28, md: 30, lg: 33 }, color: '#97FEED' }}
                    >
                        Let's Connect
                    </Typography>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 5, m: 3 }}>
                        {socialLinks.map((link, index) => (
                            <SocialLink key={index} {...link} />
                        ))}
                    </Grid>
                </Box>
            </motion.div>
        </div>
    );
};

export default ContactMe;
