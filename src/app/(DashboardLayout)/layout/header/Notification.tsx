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

interface Camera {
    id: string;
    name: string;
    location: string;
    model: string;
    status: string;
    statusColor: string;
    lastMaintenance: string;
}

interface Notification {
    id: number;
    title: string;
    description: string;
    avatar: string;
    frame_id: number;
    camera_id: string;
    camera_last_maintenance: string;
    camera_location: string;
    camera_model: string;
    camera_name: string;
    camera_status: string;
    camera_status_color: string;
    timestamp: string;
    camera?: Camera; // Made camera optional to prevent TypeError
}

const Notifications = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch('http://http://3.27.194.81/:8000/notifications');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('data', data);
                setNotifications(data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setNotifications([]);
            }
        };

        fetchNotifications();
        const intervalId = setInterval(fetchNotifications, 15000);

        return () => clearInterval(intervalId);
    }, []);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (notification: Notification) => {
        router.push(`/notification-details?camera_id=${notification.camera_id}&frame_id=${notification.frame_id}`);
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
                    {Array.isArray(notifications) && notifications.map((notification) => (
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
