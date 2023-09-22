import React from 'react'
import { IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const pages = { 'Home': '#home', 'About': '#about', 'Resume': '#resume', 'Projects': '#projects', 'Certifications': '#certifications', 'Publications': '#publications', 'Contact': '#contacts' }
    function autoScroll() {
        setTimeout(() => {
            window.scrollBy(0, -100);
        }, [0])
    }
    return (
        <>
            <SwipeableDrawer anchor={"right"} open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ backgroundColor: '#053B50', width: 300, height: '100%' }}>
                    <ListItem sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <IconButton onClick={() => setOpenDrawer(false)} sx={{
                            color: '#97FEED', alignSelf: 'flex-end', ':hover': {
                                color: 'white'
                            }
                        }}>
                            <CancelIcon />
                        </IconButton>
                        {
                            Object.entries(pages).map(([key, value]) => (
                                <ListItemButton
                                    onClick={() => { autoScroll(); setOpenDrawer(false) }}
                                    key={key}
                                    label={key}
                                    href={value}>
                                    <ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                color: '#97FEED',
                                                ':hover': {
                                                    color: 'white'
                                                }
                                            }}>
                                            {key}
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            ))
                        }
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ ml: 'auto' }}>
                <MenuIcon sx={{ color: '#5CD2E6' }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent