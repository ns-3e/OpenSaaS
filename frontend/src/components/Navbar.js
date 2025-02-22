import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      className={`backdrop-blur-xl bg-opacity-30 border-0 ${
        darkMode 
          ? 'bg-glass-dark' 
          : 'bg-glass-light'
      }`}
      sx={{
        backgroundImage: 'none',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar className="justify-between py-4">
          <Typography
            variant="h5"
            component={Link}
            to="/"
            className={`font-display font-bold no-underline bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity duration-200`}
          >
            OpenSaaS
          </Typography>

          <Box className="flex items-center space-x-6">
            <IconButton
              onClick={toggleTheme}
              className={`backdrop-blur-sm bg-opacity-10 ${
                darkMode 
                  ? 'bg-white/10 text-white' 
                  : 'bg-black/10 text-gray-900'
              } hover:bg-opacity-20 transition-all duration-200`}
            >
              {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
            
            <Button
              component={Link}
              to="/"
              className={`hover:bg-primary-main/10 backdrop-blur-sm ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
              startIcon={<HomeRoundedIcon />}
            >
              Home
            </Button>
            
            <Button
              component={Link}
              to="/login"
              className={`relative overflow-hidden group ${
                darkMode 
                  ? 'bg-white/10 hover:bg-white/20' 
                  : 'bg-black/10 hover:bg-black/20'
              } backdrop-blur-sm transition-all duration-200`}
              startIcon={<LoginRoundedIcon />}
            >
              <span className="relative z-10">Login</span>
            </Button>
            
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              className="bg-gradient-primary hover:opacity-90 transition-opacity duration-200 animate-gradient"
              sx={{
                background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                backgroundSize: '200% 200%',
              }}
              startIcon={<PersonAddRoundedIcon />}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 