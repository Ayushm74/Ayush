import { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  IconButton,
  Chip,
  Tabs,
  Tab,
  useTheme,
} from '@mui/material';
import {
  PlayCircle,
  Bookmark,
  Star,
  EmojiEvents,
  AccessTime,
  Group,
  School,
  TrendingUp,
  BookmarkBorder,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 1,
    title: 'Advanced AI & Machine Learning',
    instructor: 'Dr. Sarah Chen',
    progress: 75,
    lastAccessed: '2 days ago',
    image: 'https://source.unsplash.com/random/800x600?ai',
    nextLesson: 'Deep Learning Fundamentals',
  },
  {
    id: 2,
    title: 'Quantum Computing Fundamentals',
    instructor: 'Prof. James Wilson',
    progress: 45,
    lastAccessed: '1 week ago',
    image: 'https://source.unsplash.com/random/800x600?quantum',
    nextLesson: 'Quantum Algorithms',
  },
  {
    id: 3,
    title: 'Cybersecurity Masterclass',
    instructor: 'Alex Thompson',
    progress: 90,
    lastAccessed: '1 day ago',
    image: 'https://source.unsplash.com/random/800x600?cybersecurity',
    nextLesson: 'Final Project',
  },
];

// Mock data for bookmarked courses
const bookmarkedCourses = [
  {
    id: 4,
    title: 'Data Science Bootcamp',
    instructor: 'Dr. Emily Brown',
    price: '$149.99',
    rating: 4.7,
    students: 856,
    image: 'https://source.unsplash.com/random/800x600?data',
  },
  {
    id: 5,
    title: 'Cloud Computing Essentials',
    instructor: 'John Smith',
    price: '$129.99',
    rating: 4.6,
    students: 654,
    image: 'https://source.unsplash.com/random/800x600?cloud',
  },
];

const StudentDashboard = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(45deg, rgba(0,242,255,0.1) 0%, rgba(255,0,255,0.1) 100%)',
          py: 6,
          mb: 6,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontFamily: 'Orbitron',
                    fontWeight: 700,
                    mb: 2,
                    background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Welcome Back!
                </Typography>
                <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
                  Continue your learning journey
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<PlayCircle />}
                    sx={{
                      background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                      },
                    }}
                  >
                    Continue Learning
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    startIcon={<School />}
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      '&:hover': {
                        borderColor: 'primary.main',
                        background: 'rgba(0,242,255,0.1)',
                      },
                    }}
                  >
                    Browse Courses
                  </Button>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card
                  sx={{
                    background: 'rgba(26, 26, 63, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0,242,255,0.2)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Orbitron' }}>
                      Your Progress
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <EmojiEvents color="primary" sx={{ mr: 1 }} />
                      <Typography>3 Courses in Progress</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Star color="primary" sx={{ mr: 1 }} />
                      <Typography>2 Certificates Earned</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <TrendingUp color="primary" sx={{ mr: 1 }} />
                      <Typography>75% Average Progress</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              '& .MuiTab-root': {
                color: 'text.secondary',
                '&.Mui-selected': {
                  color: 'primary.main',
                },
              },
            }}
          >
            <Tab label="In Progress" />
            <Tab label="Bookmarked" />
            <Tab label="Completed" />
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <Grid container spacing={4}>
            {enrolledCourses.map((course, index) => (
              <Grid item xs={12} md={6} key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(26, 26, 63, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0,242,255,0.2)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,242,255,0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={course.image}
                      alt={course.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          mb: 1,
                          fontFamily: 'Orbitron',
                          fontWeight: 500,
                        }}
                      >
                        {course.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {course.instructor}
                      </Typography>
                      <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="body2">Progress</Typography>
                          <Typography variant="body2">{course.progress}%</Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={course.progress}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'rgba(0,242,255,0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AccessTime sx={{ mr: 0.5, fontSize: 20 }} />
                        <Typography variant="body2">Last accessed: {course.lastAccessed}</Typography>
                      </Box>
                      <Typography variant="body2" color="primary" sx={{ mb: 2 }}>
                        Next: {course.nextLesson}
                      </Typography>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={<PlayCircle />}
                        sx={{
                          background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                          },
                        }}
                      >
                        Continue
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {tabValue === 1 && (
          <Grid container spacing={4}>
            {bookmarkedCourses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(26, 26, 63, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(0,242,255,0.2)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 10px 20px rgba(0,242,255,0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={course.image}
                      alt={course.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Typography
                          variant="h6"
                          sx={{
                            mb: 1,
                            fontFamily: 'Orbitron',
                            fontWeight: 500,
                          }}
                        >
                          {course.title}
                        </Typography>
                        <IconButton>
                          <BookmarkBorder color="primary" />
                        </IconButton>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {course.instructor}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Star color="primary" sx={{ mr: 0.5 }} />
                        <Typography variant="body2" sx={{ mr: 1 }}>
                          {course.rating}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ({course.students} students)
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                          },
                        }}
                      >
                        {course.price}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}

        {tabValue === 2 && (
          <Typography variant="h6" color="text.secondary" align="center">
            No completed courses yet
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default StudentDashboard; 