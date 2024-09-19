'use client';
import { useState, useEffect } from 'react';
import { Grid, Paper, Tabs, Tab, Box, Typography, Chip, Modal } from "@mui/material";
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CameraList from "@/app/(DashboardLayout)/components/dashboard/CameraList";
import { useRouter } from 'next/navigation';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });

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
    status: "Offline",
    statusColor: "error.main",
    lastMaintenance: "2023-04-20",
  },
  {
    id: "3",
    name: "Garage Camera",
    location: "Garage",
    model: "SecureCam Lite",
    status: "Online",
    statusColor: "success.main",
    lastMaintenance: "2023-05-10",
  },
  {
    id: "4",
    name: "Living Room Camera",
    location: "Living Room",
    model: "IndoorVision 360",
    status: "Maintenance",
    statusColor: "warning.main",
    lastMaintenance: "2023-05-18",
  },
];

const CameraDashboard = () => {
  const [tabValue, setTabValue] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [currentFrame, setCurrentFrame] = useState('');
  const router = useRouter();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleCameraClick = (cameraId: string) => {
    if (cameraId === "1") {
      setOpenModal(true);
      connectWebSocket();
    } else {
      router.push(`/camera-stream?cameraId=${cameraId}`);
    }
  };

  const connectWebSocket = () => {
    const socket = new WebSocket('ws://localhost:8000/ws');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'frame') {
        // setCurrentFrame(data.frame);
        console.log(data);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="List View" />
        <Tab label="Grid View" />
      </Tabs>
      {tabValue === 0 && (
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <CameraList />
          </Grid>
        </Grid>
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
                  <img src='/images/camera/camera-1.jpg' alt={camera.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                  <Box p={2}>
                    <Typography variant="h6" fontWeight={600}>
                      {camera.name}
                    </Typography>
                    <Typography color="textSecondary" fontSize="13px">
                      {camera.model}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Location: {camera.location}
                    </Typography>
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
                      <Typography variant="body2">
                        Last Maintenance: {camera.lastMaintenance}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </DashboardCard>
            </Grid>
          ))}
        </Grid>
      )}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="camera-stream-modal"
        aria-describedby="live-camera-stream"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="camera-stream-modal" variant="h6" component="h2">
            Live Camera Stream
          </Typography>
          {/* {currentFrame && (
            <img src={`data:image/jpeg;base64,${currentFrame}`} alt="Live Stream" style={{ width: '100%', height: 'auto', marginTop: '20px' }} />
          )} */}
        </Box>
      </Modal>
    </Box>
  );
};

export default CameraDashboard;