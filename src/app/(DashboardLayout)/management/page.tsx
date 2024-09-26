"use client";

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Tabs, Tab } from "@mui/material";

const Management = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
        setSelectedImage(null); // Reset image when switching tabs
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Box sx={{ marginTop: 4 }}>
            <Tabs value={activeTab} onChange={handleTabChange} centered>
                <Tab label="User Info" />
                <Tab label="Vehicle Info" />
            </Tabs>
            {activeTab === 0 && (
                <Box component="form" noValidate sx={{ mt: 2 }}>
                    <Typography variant="h6">Upload User Info</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="First Name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Last Name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                    />
                    {selectedImage && (
                        <Box mt={2}>
                            <Typography variant="body1">Selected Image:</Typography>
                            <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%', height: 'auto', marginTop: '8px' }} />
                        </Box>
                    )}
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Upload
                    </Button>
                </Box>
            )}
            {activeTab === 1 && (
                <Box component="form" noValidate sx={{ mt: 2 }}>
                    <Typography variant="h6">Upload Vehicle Info</Typography>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Vehicle Name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="License Number"
                    />
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        Upload
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default Management;