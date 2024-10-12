'use client'
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Tabs, Tab } from '@mui/material';

export default function Auth() {
    const [tabValue, setTabValue] = useState(0); // 0 for Login, 1 for Sign Up
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isConnectedMilestone, setIsConnectedMilestone] = useState(false); // New state for milestone connection
    const [milestoneUsername, setMilestoneUsername] = useState(''); // Milestone username
    const [milestonePassword, setMilestonePassword] = useState(''); // Milestone password

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleLoginSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle login logic
        const currentHost = '13.239.150.70';
        const response = await fetch(`http://${currentHost}:8000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            if (data.user_id) {
                if (data.user_record.is_connected_milestone === 1) {
                    alert('Login successful! Redirecting to camera dashboard...');
                    localStorage.setItem('isLoggedIn', 'true');
                    localStorage.setItem('username', username); // Store username in localStorage
                    window.location.href = '/camera-dashboard'; // Redirect to dashboard
                } else {
                    setIsConnectedMilestone(true); // Show connect milestone UI
                }
            } else {
                setIsConnectedMilestone(false); // Show connect milestone UI
            }
        } else {
            alert('Login failed. Please try again.');
        }
    };

    const handleSignUpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const currentHost = '13.239.150.70';
        // Handle sign-up logic
        const response = await fetch(`http://${currentHost}:8000/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, username, password }),
        });

        if (response.ok) {
            alert('Sign up successful!');
            localStorage.setItem('isLoggedIn', 'true'); // Set local storage after successful sign up
            localStorage.setItem('username', username); // Store username in localStorage
            // Optionally redirect to login or dashboard
        } else {
            alert('Sign up failed. Please try again.');
        }
    };

    const handleConnectMilestoneSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle connect milestone logic
        const currentHost = '13.239.150.70';
        const response = await fetch(`http://${currentHost}:8000/connect_milestone`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, milestoneusername: milestoneUsername, milestonepassword: milestonePassword }),
        });

        if (response.ok) {
            alert('Connected to Milestone successfully!');
            localStorage.setItem('isLoggedIn', 'true'); // Set local storage after successful connection
            localStorage.setItem('username', username); // Store username in localStorage
            window.location.href = '/camera-dashboard'; // Redirect to dashboard
        } else {
            alert('Connection to Milestone failed. Please try again.');
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ marginTop: 8 }}>
                <Tabs value={tabValue} onChange={handleTabChange} centered>
                    <Tab label="Login" />
                    <Tab label="Sign Up" />
                </Tabs>
                {tabValue === 0 && !isConnectedMilestone && (
                    <Box component="form" onSubmit={handleLoginSubmit} noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h5">Login</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                    </Box>
                )}
                {isConnectedMilestone && (
                    <Box component="form" onSubmit={handleConnectMilestoneSubmit} noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h5">Connect with Milestone</Typography>
                        <img src="https://seeklogo.com/images/M/Milestone_Systems-logo-A40F19BC8A-seeklogo.com.png" alt="Milestone Logo" style={{ width: '100%', marginBottom: '16px' }} />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="milestone-username"
                            label="Milestone Username"
                            name="milestoneUsername"
                            value={milestoneUsername}
                            onChange={(e) => setMilestoneUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="milestone-password"
                            label="Milestone Password"
                            type="password"
                            name="milestonePassword"
                            value={milestonePassword}
                            onChange={(e) => setMilestonePassword(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Connect
                        </Button>
                    </Box>
                )}
                {tabValue === 1 && (
                    <Box component="form" onSubmit={handleSignUpSubmit} noValidate sx={{ mt: 1 }}>
                        <Typography component="h1" variant="h5">Sign Up</Typography>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="signup-username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="signup-password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                    </Box>
                )}
            </Box>
        </Container>
    );
}