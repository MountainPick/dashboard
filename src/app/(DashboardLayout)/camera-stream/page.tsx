"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Box, Typography } from '@mui/material';

const CameraStream: React.FC = () => {
    const searchParams = useSearchParams();
    const cameraId = searchParams.get('cameraId');
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const currentHost = window.location.hostname;
        const ws = new WebSocket(`ws://${currentHost}:8000/ws`);

        ws.onmessage = (event) => {
            setImageUrl(`data:image/jpeg;base64,${event.data}`);
        };

        ws.onclose = () => {
            console.log('WebSocket closed. Attempting to reconnect...');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        };

        ws.onerror = (error) => {
            console.error('WebSocket Error: ', error);
        };

        return () => {
            ws.close();
        };
    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#F0F4FF',
            }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Camera Stream {cameraId}
            </Typography>
            <Box
                component="img"
                src={imageUrl}
                alt="Live Video Stream"
                sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                }}
            />
        </Box>
    );
};

export default CameraStream;
