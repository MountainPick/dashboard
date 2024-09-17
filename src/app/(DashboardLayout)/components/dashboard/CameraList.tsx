import React from "react";
import { useRouter } from 'next/navigation';
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  TableContainer,
} from "@mui/material";
import BaseCard from "../shared/DashboardCard";

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

const CameraList = () => {
  const router = useRouter();

  const handleCameraClick = (cameraId: string) => {
    router.push(`/camera-stream?cameraId=${cameraId}`);
  };

  return (
    <BaseCard title="Camera List">
      <TableContainer
        sx={{
          width: {
            xs: "274px",
            sm: "100%",
          },
        }}
      >
        <Table
          aria-label="camera list table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Name
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Location
                </Typography>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  Status
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography color="textSecondary" variant="h6">
                  Last Maintenance
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cameras.map((camera) => (
              <TableRow
                key={camera.id}
                onClick={() => handleCameraClick(camera.id)}
                sx={{ cursor: 'pointer', '&:hover': { backgroundColor: 'action.hover' } }}
              >
                <TableCell>
                  <Typography fontSize="15px" fontWeight={500}>
                    {camera.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Box>
                      <Typography variant="h6" fontWeight={600}>
                        {camera.name}
                      </Typography>
                      <Typography color="textSecondary" fontSize="13px">
                        {camera.model}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="h6">
                    {camera.location}
                  </Typography>
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
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{camera.lastMaintenance}</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseCard>
  );
};

export default CameraList;
