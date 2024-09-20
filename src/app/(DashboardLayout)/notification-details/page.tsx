'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Grid,
} from '@mui/material';

interface Notification {
    id: number;
    title: string;
    description: string;
    avatar: string;
    camera_id: string;
    camera_name: string;
    camera_location: string;
    camera_model: string;
    camera_status: string;
    camera_status_color: string;
    camera_last_maintenance: string;
    frame_id: number;
    frame: string;
    timestamp: string;
}

const NotificationDetails = () => {
    const searchParams = useSearchParams();
    const camera_id = searchParams.get('camera_id');
    const frame_id = searchParams.get('frame_id');
    const [notification, setNotification] = useState<Notification | null>(null);

    useEffect(() => {
        const fetchNotification = async () => {
            if (camera_id && frame_id) {
                try {
                    const response = await fetch(`http://http://3.27.194.81/:8000/notifications/${camera_id}/${frame_id}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch notification');
                    }
                    const data = await response.json();
                    setNotification(data);
                } catch (error) {
                    console.error('Error fetching notification:', error);
                }
            }
        };

        fetchNotification();
    }, [camera_id, frame_id]);

    if (!notification) {
        return <Typography>Loading...</Typography>;
    }

    return (
        <Box p={3}>
            <Typography variant="h4" gutterBottom>Notification Details</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="400"
                            image={`data:image/jpeg;base64,${notification.frame}`}
                            alt="Notification Frame"
                        />
                        <CardContent>
                            <Typography variant="h6">{notification.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {notification.description}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Timestamp: {new Date(notification.timestamp).toLocaleString()}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" gutterBottom>Camera Information</Typography>
                            <Typography><strong>ID:</strong> {notification.camera_id}</Typography>
                            <Typography><strong>Name:</strong> {notification.camera_name}</Typography>
                            <Typography><strong>Location:</strong> {notification.camera_location}</Typography>
                            <Typography><strong>Model:</strong> {notification.camera_model}</Typography>
                            <Typography><strong>Status:</strong> {notification.camera_status}</Typography>
                            <Typography><strong>Last Maintenance:</strong> {notification.camera_last_maintenance}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default NotificationDetails;