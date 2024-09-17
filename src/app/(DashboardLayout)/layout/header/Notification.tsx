import React, { useState } from "react";
import {
    Box,
    Menu,
    IconButton,
    Badge,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Button,
} from "@mui/material";
import { IconBell } from "@tabler/icons-react";

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const notifications = [
        {
            id: 1,
            title: "Motion Detected",
            description: "Movement detected in the living room",
            avatar: "/images/icons/motion-sensor.png",
        },
        {
            id: 2,
            title: "Door Opened",
            description: "Front door opened unexpectedly",
            avatar: "/images/icons/door-sensor.png",
        },
        {
            id: 3,
            title: "Unidentified Person",
            description: "Unknown individual spotted in backyard",
            avatar: "/images/icons/camera-alert.png",
        },
    ];

    return (
        <Box>
            <IconButton
                size="large"
                aria-label="show notifications"
                color="inherit"
                onClick={handleClick}
            >
                <Badge badgeContent={notifications.length} color="error">
                    <IconBell width="20" height="20" />
                </Badge>
            </IconButton>
            <Menu
                id="notifications-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{
                    "& .MuiMenu-paper": {
                        width: "360px",
                        p: 2,
                        pb: 2,
                        pt: 0,
                    },
                }}
            >
                <Box pt={2} pb={1}>
                    <Typography variant="h6">Notifications</Typography>
                </Box>
                <List>
                    {notifications.map((notification) => (
                        <ListItem key={notification.id} alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="User Avatar" src={notification.avatar} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={notification.title}
                                secondary={notification.description}
                            />
                        </ListItem>
                    ))}
                </List>
                <Box mt={2}>
                    <Button fullWidth variant="contained" color="primary">
                        View All Notifications
                    </Button>
                </Box>
            </Menu>
        </Box>
    );
};

export default Notifications;
