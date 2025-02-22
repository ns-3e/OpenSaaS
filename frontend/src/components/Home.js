import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import { useTheme } from '../contexts/ThemeContext';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BoltIcon from '@mui/icons-material/Bolt';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ShieldIcon from '@mui/icons-material/Shield';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import StorageIcon from '@mui/icons-material/Storage';
import PaymentsIcon from '@mui/icons-material/Payments';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ApiIcon from '@mui/icons-material/Api';
import TestingIcon from '@mui/icons-material/BugReport';
import FeatureShowcase from './FeatureShowcase';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const FEATURES = [
  {
    icon: <DataObjectIcon />,
    title: "React Frontend",
    description: "Modern React 18 with hooks, context API, and Redux Toolkit. Features Material UI and Tailwind CSS for responsive design.",
    tags: ["React 18", "Redux", "MUI", "Tailwind"]
  },
  {
    icon: <IntegrationInstructionsIcon />,
    title: "Django Backend",
    description: "Production-ready Django REST Framework with comprehensive API endpoints, JWT authentication, and admin dashboard.",
    tags: ["Django", "DRF", "JWT", "Admin"]
  },
  {
    icon: <StorageIcon />,
    title: "PostgreSQL Database",
    description: "Scalable PostgreSQL setup with migrations, optimized queries, and connection pooling for high performance.",
    tags: ["PostgreSQL", "Migrations", "Pooling"]
  },
  // ... add more features
];

const FeatureCard = ({ feature, darkMode }) => (
  <Paper 
    elevation={0}
    className={`
      h-full p-6 rounded-xl transition-all duration-300
      ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'}
      hover:transform hover:scale-102 hover:shadow-lg
      backdrop-blur-sm
    `}
  >
    <div className="flex flex-col h-full">
      <div className={`
        w-12 h-12 rounded-lg mb-4 flex items-center justify-center
        ${darkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}
      `}>
        {React.cloneElement(feature.icon, {
          className: `text-blue-500`,
          sx: { fontSize: 24 }
        })}
      </div>
      
      <Typography variant="h6" className="mb-2 font-semibold">
        {feature.title}
      </Typography>
      
      <Typography variant="body2" className="mb-4 flex-grow">
        {feature.description}
      </Typography>
      
      <div className="flex flex-wrap gap-2">
        {feature.tags.map((tag, idx) => (
          <span
            key={idx}
            className={`
              text-xs px-2 py-1 rounded-full
              ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
            `}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Paper>
);

const InfiniteFeatures = () => {
  const { darkMode } = useTheme();
  const [visibleFeatures, setVisibleFeatures] = useState(6);
  const [loading, setLoading] = useState(false);
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && visibleFeatures < FEATURES.length) {
          setLoading(true);
          // Simulate API delay
          setTimeout(() => {
            setVisibleFeatures(prev => Math.min(prev + 3, FEATURES.length));
            setLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [visibleFeatures, loading]);

  return (
    <Box className="w-full">
      <Grid container spacing={3}>
        {FEATURES.slice(0, visibleFeatures).map((feature, index) => (
          <Grid item xs={12} md={4} key={index}>
            <FeatureCard feature={feature} darkMode={darkMode} />
          </Grid>
        ))}
      </Grid>
      
      {visibleFeatures < FEATURES.length && (
        <div 
          ref={observerTarget}
          className="w-full py-8 flex justify-center"
        >
          <div className="animate-pulse text-gray-500">
            Loading more features...
          </div>
        </div>
      )}
    </Box>
  );
};

function Home() {
  const { darkMode } = useTheme();

  return (
    <Container maxWidth="lg" className="px-4 md:px-6 mt-8 md:mt-16 mb-12 md:mb-24">
      <Box className="text-center space-y-4 md:space-y-8">
        {/* Hero Badge */}
        <div className="inline-flex items-center px-4 md:px-6 py-2 rounded-full bg-gradient-primary bg-opacity-10 backdrop-blur-sm animate-pulse-glow" style={{ '--glow-color': '#0ea5e9' }}>
          <RocketLaunchIcon className="w-3 h-3 md:w-4 md:h-4 mr-2 text-white animate-float" />
          <span className="text-xs md:text-sm font-medium text-white">Launch Your SaaS Project Today</span>
        </div>

        {/* Main Heading */}
        <Typography
          variant="h1"
          component="h1"
          className="text-3xl md:text-4xl lg:text-6xl font-display font-bold leading-tight mb-4 md:mb-6 relative"
        >
          <span className={darkMode ? 'text-white' : 'text-gray-900'}>
            Build Your Next SaaS with{' '}
          </span>
          <span className="bg-gradient-primary bg-clip-text text-transparent animate-gradient relative inline-block">
            OpenSaaS
            <AutoAwesomeIcon className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-glow-secondary scale-75 md:scale-100" style={{ '--glow-color': '#6366f1' }} />
          </span>
        </Typography>

        {/* Subtitle */}
        <Typography
          variant="h5"
          className={`text-lg md:text-xl max-w-xl md:max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          A production-ready SaaS template with React, Django, and everything you need to launch faster.
        </Typography>

        {/* CTA Buttons */}
        <Box className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-8 md:mt-12">
          <Button
            component={Link}
            to="/signup"
            variant="contained"
            size="large"
            className="bg-gradient-primary hover:opacity-90 transition-all duration-200 animate-gradient group w-full sm:w-auto"
            sx={{
              background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
              backgroundSize: '200% 200%',
            }}
            endIcon={<ArrowForwardIcon className="group-hover:translate-x-1 transition-transform duration-200" />}
          >
            Get Started Free
          </Button>
          
          <Button
            component={Link}
            to="/login"
            size="large"
            className={`w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 text-base md:text-lg backdrop-blur-sm group ${
              darkMode 
                ? 'bg-white/10 hover:bg-white/20 text-white' 
                : 'bg-black/10 hover:bg-black/20 text-gray-900'
            } transition-all duration-200`}
          >
            Login
          </Button>
        </Box>

        {/* Feature Showcase */}
        <div className="mt-12 md:mt-16">
          <FeatureShowcase />
        </div>
      </Box>
    </Container>
  );
}

export default Home; 