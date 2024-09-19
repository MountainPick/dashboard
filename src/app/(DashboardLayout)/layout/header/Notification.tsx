import React, { useState, useEffect } from "react";
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
import { useRouter } from 'next/navigation';

interface Notification {
    id: number;
    title: string;
    description: string;
    avatar: string;
    frame_id: number;
    camera: {
        id: string;
        name: string;
        location: string;
        model: string;
        status: string;
        statusColor: string;
        lastMaintenance: string;
    };
}

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const router = useRouter();

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8000/ws');

        socket.onopen = () => {
            console.log('WebSocket connection established');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.type === 'notification') {
                setNotifications(prevNotifications => [...prevNotifications, data]);
            }
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            socket.close();
        };
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (notification: Notification) => {
        router.push(`/notification-details?camera_id=${notification.camera.id}&frame_id=${notification.frame_id}`);
        handleClose();
    };

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
                        <ListItem
                            key={notification.id}
                            alignItems="flex-start"
                            onClick={() => handleNotificationClick(notification)}
                            sx={{ cursor: 'pointer' }}
                        >
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
