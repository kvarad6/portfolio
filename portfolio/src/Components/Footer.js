import { Typography, Box } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}>
                <Box>
                    <Typography textAlign='center' sx={{ color: '#64CCC5', fontSize: { xs: 14, md: 16, lg: 17 }, m: 4 }}>Developed by Varad Kulkarni</Typography>
                </Box>
            </motion.div>
        </>
    )
}

export default Footer