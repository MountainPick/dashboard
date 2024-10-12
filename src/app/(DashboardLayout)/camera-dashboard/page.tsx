'use client';
import { useState } from 'react';
import { Grid, Tabs, Tab, Box, Typography, Chip, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from "@mui/material";
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const cameras = [
  {
    id: "1",
    name: "Front Door Camera",
    location: "Entrance",
    model: "SecureCam Pro",
    status: "Online",
    statusColor: "success.main",
    lastMaintenance: "2023-05-15",
  },
  {
    id: "2",
    name: "Backyard Camera",
    location: "Rear Garden",
    model: "OutdoorVision X",
    status: "Disabled",
    statusColor: "error.main",
    lastMaintenance: "2023-04-20",
  },
  {
    id: "3",
    name: "Garage Camera",
    location: "Garage",
    model: "SecureCam Lite",
    status: "Disabled",
    statusColor: "error.main",
    lastMaintenance: "2023-05-10",
  },
  {
    id: "4",
    name: "Living Room Camera",
    location: "Living Room",
    model: "IndoorVision 360",
    status: "Disabled",
    statusColor: "error.main",
    lastMaintenance: "2023-05-18",
  },
];

const CameraDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const router = useRouter();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCameraClick = (cameraId: string) => {
    if (cameraId === "1") {
      router.push(`/camera-stream?cameraId=${cameraId}`);
    }
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="List View" />
        <Tab label="Grid View" />
      </Tabs>
      {tabValue === 0 && (
        <TableContainer>
          <Table aria-label="camera list table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">Id</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">Name</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">Location</Typography>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">Status</Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography color="textSecondary" variant="h6">Last Maintenance</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cameras.map((camera) => (
                <TableRow
                  key={camera.id}
                  onClick={() => handleCameraClick(camera.id)}
                  sx={{
                    cursor: camera.id === "1" ? 'pointer' : 'not-allowed',
                    '&:hover': camera.id === "1" ? { backgroundColor: 'action.hover' } : {},
                    opacity: camera.id === "1" ? 1 : 0.5,
                  }}
                >
                  <TableCell>
                    <Typography fontSize="15px" fontWeight={500}>{camera.id}</Typography>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <Box>
                        <Typography variant="h6" fontWeight={600}>{camera.name}</Typography>
                        <Typography color="textSecondary" fontSize="13px">{camera.model}</Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Typography color="textSecondary" variant="h6">{camera.location}</Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      sx={{
                        pl: "4px",
                        pr: "4px",
                        backgroundColor: camera.statusColor,
                        color: "#fff",
                      }}
                      size="small"
                      label={camera.status}
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6">{camera.lastMaintenance}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {tabValue === 1 && (
        <Grid container spacing={2}>
          {cameras.map((camera) => (
            <Grid item xs={12} sm={6} key={camera.id}>
              <DashboardCard>
                <Box
                  onClick={() => handleCameraClick(camera.id)}
                  sx={{ cursor: camera.id === "1" ? 'pointer' : 'not-allowed', '&:hover': camera.id === "1" ? { backgroundColor: 'action.hover' } : {}, opacity: camera.id === "1" ? 1 : 0.5 }}
                >
                  {camera.id === "1" ? (
                    <CameraStream />
                  ) : (
                    <img src={camera.status === "Disabled" ? 'https://t4.ftcdn.net/jpg/04/35/65/05/360_F_435650529_fdtx8euYTrcxH5NEAWONH2zQYOEWfgrA.jpg' : '/images/camera/camera-1.jpg'} alt={camera.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  )}
                  <Box p={2}>
                    <Typography variant="h6" fontWeight={600}>{camera.name}</Typography>
                    <Typography color="textSecondary" fontSize="13px">{camera.model}</Typography>
                    <Typography color="textSecondary" variant="body2">Location: {camera.location}</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                      <Chip
                        sx={{
                          pl: "4px",
                          pr: "4px",
                          backgroundColor: camera.statusColor,
                          color: "#fff",
                        }}
                        size="small"
                        label={camera.status}
                      />
                      <Typography variant="body2">Last Maintenance: {camera.lastMaintenance}</Typography>
                    </Box>
                  </Box>
                </Box>
              </DashboardCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

const CameraStream: React.FC = () => {
  const searchParams = useSearchParams();
  const cameraId = searchParams.get('cameraId');
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const currentHost = '13.239.150.70';
    const ws = new WebSocket(`ws://${currentHost}:8000/ws`);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'frame') {
        setImageUrl(`data:image/jpeg;base64,${data.frame}`);
      }
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
        height: '200px',
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

export default CameraDashboard;