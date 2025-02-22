import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  TextField, 
  Button, 
  Alert, 
  Paper, 
  Typography,
  Container,
  Box,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import KeyRoundedIcon from '@mui/icons-material/KeyRounded';

function Signup() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/api/auth/signup/', {
        email: formData.email,
        password: formData.password
      });
      
      setSuccess(response.data.message);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during signup');
    }
  };

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
        <Box className="text-center mb-8">
          <Typography 
            variant="h4" 
            component="h1"
            className="font-display font-bold mb-2"
          >
            Create Account
          </Typography>
          <Typography 
            variant="body1" 
            className={darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}
          >
            Join us and start building amazing things
          </Typography>
        </Box>
        
        {error && (
          <Alert 
            severity="error" 
            className="mb-6"
            sx={{
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'error.main',
            }}
          >
            {error}
          </Alert>
        )}
        
        {success && (
          <Alert 
            severity="success" 
            className="mb-6"
            sx={{
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'success.main',
            }}
          >
            {success}
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-4"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailRoundedIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="mb-4"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRoundedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            variant="outlined"
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="mb-6"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyRoundedIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            className="py-3 shadow-soft-md hover:shadow-soft-lg dark:shadow-dark-md dark:hover:shadow-dark-lg transition-all duration-200"
            startIcon={<PersonAddRoundedIcon />}
          >
            Create Account
          </Button>

          <Box className="text-center pt-6">
            <Typography 
              variant="body2" 
              className={darkMode ? 'text-dark-text-secondary' : 'text-light-text-secondary'}
            >
              Already have an account?{' '}
              <Link 
                to="/login" 
                className="text-primary-main hover:text-primary-dark font-medium transition-colors duration-200"
              >
                Sign in here
              </Link>
            </Typography>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default Signup; 