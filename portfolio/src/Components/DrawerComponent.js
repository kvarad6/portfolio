import React from 'react'
import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const pages = ["Home", "About", "Resume", "Projects", "Contact"]

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ backgroundColor: '#053B50', width:300, height: '100%'}}>
                        {
                            pages.map((page, index) => (
                                <ListItemButton onClick={() => setOpenDrawer(false)} key={index} sx={{display: 'flex', flexDirection: 'column', alignItems:'center', m:3}}>
                                    <ListItemIcon>
                                        <ListItemText sx={{ color: '#40c7cf', fontSize:200}}>
                                            {page}
                                        </ListItemText>
                                    </ListItemIcon>
                                </ListItemButton>
                            ))
                        }                    
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} sx={{ ml: 'auto' }}>
                <MenuIcon sx={{ color: '#40c7cf' }} />
            </IconButton>
        </>
    )
}

export default DrawerComponent