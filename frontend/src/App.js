import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import { useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import VerifyEmail from './components/VerifyEmail';

function AppContent() {
  const { darkMode } = useTheme();

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        light: '#0ea5e9',
        main: '#0284c7',
        dark: '#0369a1',
      },
      background: {
        default: 'transparent',
        paper: 'transparent',
      },
      text: {
        primary: darkMode ? '#f9fafb' : '#111827',
        secondary: darkMode ? '#9ca3af' : '#6b7280',
      },
    },
    typography: {
      fontFamily: '"Inter", "system-ui", "sans-serif"',
      h1: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      h2: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      h3: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      h4: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      h5: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      h6: { fontFamily: '"Plus Jakarta Sans", "system-ui", "sans-serif"' },
      button: {
        textTransform: 'none',
        fontWeight: 500,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '8px 16px',
            border: 'none',
          },
        },
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: 'transparent',
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <div 
        className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
          darkMode ? 'bg-gradient-dark' : 'bg-gradient-light'
        } animate-gradient`}
      >
        {/* Animated Background Blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Large Primary Blob */}
          <div 
            className="absolute animate-morph animate-move-slow"
            style={{
              width: '800px',
              height: '800px',
              top: '-15%',
              left: '-5%',
              background: darkMode 
                ? 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(99,102,241,0.15))'
                : 'linear-gradient(135deg, rgba(96,165,250,0.15), rgba(129,140,248,0.15))',
              filter: 'blur(30px)',
              opacity: 0.7,
            }}
          />

          {/* Medium Secondary Blob */}
          <div 
            className="absolute animate-morph animate-move"
            style={{
              width: '600px',
              height: '600px',
              top: '40%',
              right: '-10%',
              background: darkMode
                ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.15))'
                : 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(192,132,252,0.15))',
              filter: 'blur(30px)',
              opacity: 0.5,
              animationDelay: '-5s',
            }}
          />

          {/* Small Accent Blob */}
          <div 
            className="absolute animate-morph animate-move-slower"
            style={{
              width: '400px',
              height: '400px',
              bottom: '10%',
              left: '25%',
              background: darkMode
                ? 'linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))'
                : 'linear-gradient(135deg, rgba(192,132,252,0.15), rgba(244,114,182,0.15))',
              filter: 'blur(30px)',
              opacity: 0.6,
              animationDelay: '-10s',
            }}
          />

          {/* Extra Small Floating Blob */}
          <div 
            className="absolute animate-morph animate-move"
            style={{
              width: '200px',
              height: '200px',
              top: '30%',
              left: '60%',
              background: darkMode
                ? 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.15))'
                : 'linear-gradient(135deg, rgba(96,165,250,0.15), rgba(192,132,252,0.15))',
              filter: 'blur(20px)',
              opacity: 0.4,
              animationDelay: '-15s',
            }}
          />

          {/* Background Glow Effect */}
          <div className="absolute inset-0 backdrop-blur-[100px] mix-blend-normal opacity-40" />
        </div>

        {/* Content */}
        <div className="relative z-10 backdrop-blur-sm">
          <Router>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/verify-email" element={<VerifyEmail />} />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App; 