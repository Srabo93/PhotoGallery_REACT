import React from "react";
import CameraIcon from "@mui/icons-material/Camera";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, flexWrap: "wrap", minWidth: "sm" }}>
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon fontSize="large" sx={{ mr: 2 }} />
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, letterSpacing: 5 }}
          >
            PhotoGallery
          </Typography>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
              margin: 1,
              borderRadius: 4,
            }}
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="small"
            sx={{
              fontWeight: "bold",
              letterSpacing: 2,
              margin: 1,
              borderRadius: 4,
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
