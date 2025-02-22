import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Paper,
  Typography,
  CircularProgress,
  Alert,
  Button,
  Box,
} from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

function VerifyEmail() {
  const { darkMode } = useTheme();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    if (!token) {
      setStatus('error');
      setMessage('No verification token found');
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/auth/verify-email/', {
          token
        });
        setStatus('success');
        setMessage(response.data.message);
      } catch (err) {
        setStatus('error');
        setMessage(err.response?.data?.error || 'An error occurred during verification');
      }
    };

    verifyEmail();
  }, [location]);

  return (
    <Container maxWidth="sm" className="mt-16">
      <Paper 
        elevation={0} 
        className={`p-8 ${
          darkMode 
            ? 'bg-dark-card border border-dark-border' 
            : 'bg-light-card border border-light-border'
        } rounded-xl transition-all duration-200`}
      >
        <Box className="text-center">
          <Typography 
            variant="h4" 
            component="h1" 
            className="font-display font-bold mb-6"
          >
            Email Verification
          </Typography>

          {status === 'verifying' && (
            <div className="flex flex-col items-center space-y-4 py-8">
              <CircularProgress size={48} />
              <Typography 
                className={darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}
              >
                Verifying your email address...
              </Typography>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-6 py-8">
              <MarkEmailReadIcon 
                className="text-success-main w-16 h-16"
              />
              <Alert 
                severity="success"
                sx={{
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'success.main',
                }}
              >
                {message}
              </Alert>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/login')}
                className="mt-6 shadow-soft-md hover:shadow-soft-lg dark:shadow-dark-md dark:hover:shadow-dark-lg transition-all duration-200"
                startIcon={<LoginIcon />}
              >
                Proceed to Login
              </Button>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-6 py-8">
              <ErrorOutlineIcon 
                className="text-error-main w-16 h-16"
              />
              <Alert 
                severity="error"
                sx={{
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'error.main',
                }}
              >
                {message}
              </Alert>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate('/signup')}
                className="mt-6 shadow-soft-md hover:shadow-soft-lg dark:shadow-dark-md dark:hover:shadow-dark-lg transition-all duration-200"
                startIcon={<PersonAddIcon />}
              >
                Back to Sign Up
              </Button>
            </div>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default VerifyEmail; 