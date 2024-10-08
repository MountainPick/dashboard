'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Tabs, Tab, Box, Typography, Switch, Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Button } from "@mui/material";
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { useRouter } from 'next/navigation';

interface Camera {
  id: string;
  name: string;
  displayName: string;
  enabled: boolean;
  channel: number;
  description: string;
  lastModified: string;
}

const CameraDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [cameras, setCameras] = useState<Camera[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchCamerasAndIds = async () => {
      try {
        const username = localStorage.getItem('username');
        const [camerasResponse, cameraIdsResponse] = await Promise.all([
          axios.get(`http://localhost:8000/user_cameras/${username}`),
          axios.get('http://localhost:8000/get_camera_ids')
        ]);

        const fetchedCameras = camerasResponse.data.cameras.map((camera: any) => ({
          ...camera,
          enabled: false, // Start with all cameras disabled
        }));

        const enabledCameraIds = Object.values(cameraIdsResponse.data.camera_ids);

        // Update enabled status based on the fetched camera IDs
        const updatedCameras = fetchedCameras.map((camera: Camera) => ({
          ...camera,
          enabled: enabledCameraIds.includes(camera.id)
        }));

        setCameras(updatedCameras);
      } catch (error) {
        console.error('Error fetching cameras and IDs:', error);
      }
    };

    fetchCamerasAndIds();
  }, []);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCameraClick = (cameraId: string) => {
    router.push(`/camera-stream?cameraId=${cameraId}`);
  };

  const handleToggle = (cameraId: string, currentStatus: boolean) => {
    const enabledCount = cameras.filter(cam => cam.enabled).length;
    if (!currentStatus && enabledCount >= 2) {
      alert("You can only enable up to 2 cameras.");
      return;
    }

    const updatedCameras = cameras.map(camera =>
      camera.id === cameraId ? { ...camera, enabled: !currentStatus } : camera
    );
    setCameras(updatedCameras);
  };

  const handleSave = async () => {
    const enabledCameras = cameras.filter(cam => cam.enabled);
    if (enabledCameras.length !== 2) {
      alert("Please select exactly 2 cameras before saving.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/set_camera_ids', {
        camera_id_1: enabledCameras[0].id,
        camera_id_2: enabledCameras[1].id,
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error saving camera IDs:', error);
      alert("Failed to save camera IDs. Please try again.");
    }
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="List View" />
        <Tab label="Grid View" />
      </Tabs>
      {tabValue === 0 && (
        <>
          <TableContainer>
            <Table aria-label="camera list table">
              <TableHead>
                <TableRow>
                  <TableCell><Typography color="textSecondary" variant="h6">ID</Typography></TableCell>
                  <TableCell><Typography color="textSecondary" variant="h6">Name</Typography></TableCell>
                  <TableCell><Typography color="textSecondary" variant="h6">Channel</Typography></TableCell>
                  <TableCell><Typography color="textSecondary" variant="h6">Enabled</Typography></TableCell>
                  <TableCell><Typography color="textSecondary" variant="h6">Last Modified</Typography></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cameras.map((camera) => (
                  <TableRow
                    key={camera.id}
                    onClick={() => handleCameraClick(camera.id)}
                    sx={{
                      cursor: 'pointer',
                      '&:hover': { backgroundColor: 'action.hover' },
                    }}
                  >
                    <TableCell><Typography fontSize="15px" fontWeight={500}>{camera.id}</Typography></TableCell>
                    <TableCell>
                      <Box>
                        <Typography variant="h6" fontWeight={600}>{camera.displayName}</Typography>
                        <Typography color="textSecondary" fontSize="13px">{camera.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell><Typography variant="body2">{camera.channel}</Typography></TableCell>
                    <TableCell>
                      <Switch
                        checked={camera.enabled}
                        onChange={() => handleToggle(camera.id, camera.enabled)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </TableCell>
                    <TableCell><Typography variant="body2">{new Date(camera.lastModified).toLocaleString()}</Typography></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </>
      )}
      {tabValue === 1 && (
        <Grid container spacing={2}>
          {cameras.map((camera) => (
            <Grid item xs={12} sm={6} key={camera.id}>
              <DashboardCard>
                <Box
                  onClick={() => handleCameraClick(camera.id)}
                  sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}
                >
                  <CameraStream cameraId={camera.id} />
                  <Box p={2}
                    sx={{ paddingTop: "60px" }}>
                    <Typography variant="h6" fontWeight={600}>{camera.name}</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                      <Switch
                        checked={camera.enabled}
                        onChange={() => handleToggle(camera.id, camera.enabled)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Typography variant="body2">Last Modified: {new Date(camera.lastModified).toLocaleString()}</Typography>
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

const CameraStream: React.FC<{ cameraId: string }> = ({ cameraId }) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    const currentHost = window.location.hostname;
    console.log(`Connecting to WebSocket for camera ${cameraId} on ${currentHost}`);
    const ws = new WebSocket(`ws://${currentHost}:8000/ws/frontend/${cameraId}`);

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log(`Received data keys: ${Object.keys(data).join(', ')}`);
        if (data.camera_id === cameraId && data.image) {
          console.log(`Received image data for camera ${cameraId}`);
          setImageUrl(`data:image/jpeg;base64,${data.image}`);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    ws.onopen = () => {
      console.log(`WebSocket connection opened for camera ${cameraId}`);
    };

    ws.onclose = () => {
      console.log(`WebSocket closed for camera ${cameraId}. Attempting to reconnect...`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    };

    ws.onerror = (error) => {
      console.error(`WebSocket Error for camera ${cameraId}: `, error);
    };

    return () => {
      ws.close();
    };
  }, [cameraId]);

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
      <Typography variant="h6" component="h2" gutterBottom>
        {/* Camera Stream {cameraId} */}
      </Typography>
      <Box
        component="img"
        src={imageUrl || 'https://via.placeholder.com/300x200?text=No+Stream'}
        alt={`Live Video Stream ${cameraId}`}
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