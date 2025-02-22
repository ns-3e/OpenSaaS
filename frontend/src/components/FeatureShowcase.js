import React from 'react';
import { Box, Typography, GlobalStyles } from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import DataObjectIcon from '@mui/icons-material/DataObject';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import StorageIcon from '@mui/icons-material/Storage';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import ApiIcon from '@mui/icons-material/Api';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Base features list.
const FEATURES = [
  {
    icon: <DataObjectIcon />,
    title: 'React Frontend',
    description: 'Modern React 18 with hooks, context API, and Redux Toolkit',
    status: 'ready'
  },
  {
    icon: <IntegrationInstructionsIcon />,
    title: 'Django Backend',
    description: 'Production-ready Django REST Framework with JWT auth',
    status: 'ready'
  },
  {
    icon: <StorageIcon />,
    title: 'PostgreSQL Database',
    description: 'Scalable PostgreSQL with optimized queries',
    status: 'ready'
  },
  {
    icon: <AutoFixHighIcon />,
    title: 'Modern UI/UX',
    description: 'Glassmorphism effects, animated backgrounds, and smooth transitions',
    status: 'ready'
  },
  {
    icon: <DarkModeIcon />,
    title: 'Theme System',
    description: 'Dynamic dark/light mode with context-based theme management',
    status: 'ready'
  },
  {
    icon: <SecurityIcon />,
    title: 'Authentication',
    description: 'Complete auth system with email verification and JWT',
    status: 'ready'
  },
  {
    icon: <ApiIcon />,
    title: 'API Documentation',
    description: 'Interactive API docs with Swagger and ReDoc integration',
    status: 'ready'
  },
  {
    icon: <CloudSyncIcon />,
    title: 'GraphQL Integration',
    description: 'Coming soon: Full GraphQL support with Apollo',
    status: 'coming'
  },
  {
    icon: <ApiIcon />,
    title: 'WebSocket Support',
    description: 'Coming soon: Real-time updates with Django Channels',
    status: 'coming'
  },
  {
    icon: <PaymentIcon />,
    title: 'Stripe Integration',
    description: 'Coming soon: Secure payment processing with Stripe',
    status: 'coming'
  },
  {
    icon: <AccountCircleIcon />,
    title: 'OAuth Support',
    description: 'Coming soon: Social login with Google, GitHub, and more',
    status: 'coming'
  },
  {
    icon: <NotificationsActiveIcon />,
    title: 'Push Notifications',
    description: 'Coming soon: Real-time notifications with Firebase',
    status: 'coming'
  },
  {
    icon: <CloudUploadIcon />,
    title: 'File Storage',
    description: 'Coming soon: S3-compatible cloud storage integration',
    status: 'coming'
  }
];

// Generate a list of unique features ensuring no two adjacent cards are the same.
const generateUniqueFeatures = (count) => {
  const result = [];
  while (result.length < count) {
    const candidate = FEATURES[Math.floor(Math.random() * FEATURES.length)];
    if (result.length === 0 || result[result.length - 1].title !== candidate.title) {
      result.push({ ...candidate, id: Math.random().toString(36).substr(2, 9) });
    }
  }
  return result;
};

// Duplicate the features list while ensuring the last of the first array and the first of the duplicate don't match.
const duplicateFeatures = (features) => {
  const duplicate = [...features];
  if (features.length > 0 && features[features.length - 1].title === duplicate[0].title) {
    if (duplicate.length > 1) {
      [duplicate[0], duplicate[1]] = [duplicate[1], duplicate[0]];
    }
  }
  return [...features, ...duplicate];
};

const FeatureCard = ({ feature, fixedHeight }) => {
  const { darkMode } = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: darkMode 
          ? 'rgba(255,255,255,0.03)' 
          : 'rgba(255,255,255,0.8)',
        borderRadius: 2,
        p: 2,
        m: 1,
        boxShadow: darkMode
          ? '0px 4px 12px rgba(0,0,0,0.4)'
          : '0px 4px 12px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${darkMode 
          ? 'rgba(255,255,255,0.05)' 
          : 'rgba(0,0,0,0.05)'}`,
        height: fixedHeight,
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          transform: 'scale(1.02)',
          boxShadow: darkMode
            ? '0px 6px 18px rgba(0,0,0,0.5)'
            : '0px 6px 18px rgba(0,0,0,0.12)',
          backgroundColor: darkMode 
            ? 'rgba(255,255,255,0.05)' 
            : 'rgba(255,255,255,0.9)',
        }
      }}
    >
      {/* Icon container */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: feature.status === 'coming'
            ? darkMode 
              ? 'rgba(168,85,247,0.15)'
              : 'rgba(168,85,247,0.1)'
            : darkMode
              ? 'rgba(59,130,246,0.15)'
              : 'rgba(59,130,246,0.1)',
          flexShrink: 0,
          transition: 'all 0.3s ease',
        }}
      >
        {React.cloneElement(feature.icon, {
          sx: { 
            fontSize: 32, 
            color: feature.status === 'coming' 
              ? darkMode ? '#c084fc' : '#a855f7'
              : darkMode ? '#60a5fa' : '#3b82f6',
            transition: 'color 0.3s ease',
          }
        })}
      </Box>

      {/* Text content */}
      <Box sx={{ ml: 2, flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: darkMode ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.87)',
            mb: 0.5,
            transition: 'color 0.3s ease',
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: darkMode ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
            fontStyle: feature.status === 'coming' ? 'italic' : 'normal',
            transition: 'color 0.3s ease',
          }}
        >
          {feature.description}
        </Typography>
      </Box>
    </Box>
  );
};

// ScrollingColumn uses CSS keyframe animations for an infinite, seamless scroll.
// Hovering over a column pauses the animation.
const ScrollingColumn = ({ speed = 15, reverse = false, delay = 0 }) => {
  const features = generateUniqueFeatures(10);
  const allFeatures = duplicateFeatures(features);
  const cardHeight = 120; // Adjusted height for horizontal layout
  const totalHeight = features.length * cardHeight; // Height of one full cycle
  const duration = totalHeight / speed; // Duration in seconds

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100%',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget.querySelector('.scrolling-content');
        if (el) el.style.animationPlayState = 'paused';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget.querySelector('.scrolling-content');
        if (el) el.style.animationPlayState = 'running';
      }}
    >
      <Box
        className="scrolling-content"
        sx={{
          '--scroll-height': `${totalHeight}px`,
          animation: `${reverse ? 'scrollDown' : 'scrollUp'} ${duration}s linear infinite`,
          animationDelay: `${delay}ms`
        }}
      >
        {allFeatures.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} fixedHeight={cardHeight} />
        ))}
      </Box>
    </Box>
  );
};

const FeatureShowcase = () => {
  const { darkMode } = useTheme();
  return (
    <Box sx={{ position: 'relative', py: 8, px: 2 }}>
      {/* Global keyframes for scroll animations */}
      <GlobalStyles
        styles={{
          '@keyframes scrollUp': {
            from: { transform: 'translateY(0)' },
            to: { transform: 'translateY(calc(-1 * var(--scroll-height)))' }
          },
          '@keyframes scrollDown': {
            from: { transform: 'translateY(calc(-1 * var(--scroll-height)))' },
            to: { transform: 'translateY(0)' }
          }
        }}
      />
      <Box
        sx={{
          maxWidth: '1200px',
          mx: 'auto',
          height: 600,
          overflow: 'hidden',
          position: 'relative',
          borderRadius: 3,
          backgroundColor: darkMode
            ? 'rgba(17,24,39,0.5)'
            : 'rgba(249,250,251,0.5)',
          backdropFilter: 'blur(10px)',
          border: `1px solid ${darkMode ? 'rgba(55,65,81,0.5)' : 'rgba(229,231,235,0.5)'}`
        }}
      >
        <Box sx={{ position: 'relative', height: '100%', p: 2 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 2,
              height: '100%'
            }}
          >
            <ScrollingColumn speed={15} delay={0} />
            <ScrollingColumn speed={15} delay={500} reverse={true} />
            <ScrollingColumn speed={15} delay={1000} />
          </Box>
        </Box>
        {/* Top transparent gradient mask */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 80,
            pointerEvents: 'none',
            background: darkMode
              ? 'linear-gradient(to bottom, rgba(17,24,39,1), rgba(17,24,39,0))'
              : 'linear-gradient(to bottom, rgba(249,250,251,1), rgba(249,250,251,0))',
            zIndex: 1
          }}
        />
        {/* Bottom transparent gradient mask */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            pointerEvents: 'none',
            background: darkMode
              ? 'linear-gradient(to top, rgba(17,24,39,1), rgba(17,24,39,0))'
              : 'linear-gradient(to top, rgba(249,250,251,1), rgba(249,250,251,0))',
            zIndex: 1
          }}
        />
      </Box>
    </Box>
  );
};

export default FeatureShowcase;