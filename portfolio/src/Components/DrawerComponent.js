import React from 'react'
import { Drawer, IconButton, List } from '@mui/material';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComponent = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} >
                <List>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemText>
                                XYZ
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default DrawerComponent