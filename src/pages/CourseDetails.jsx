import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Divider,
  Rating,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from '@mui/material';
import {
  AccessTime,
  School,
  Star,
  CheckCircle,
  PlayCircle,
  Description,
  Quiz,
  EmojiEvents,
  Person,
  Group,
  Language,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Mock data for course details
const courseData = {
  id: 1,
  title: 'Advanced AI & Machine Learning',
  instructor: {
    name: 'Dr. Sarah Chen',
    avatar: 'https://source.unsplash.com/random/150x150?portrait',
    bio: 'AI Researcher with 10+ years of experience in Machine Learning and Deep Learning.',
    rating: 4.9,
    students: 5000,
    courses: 12,
  },
  rating: 4.8,
  students: 1234,
  duration: '12 weeks',
  price: '$199.99',
  image: 'https://source.unsplash.com/random/1200x400?ai',
  description: 'Master the latest techniques in Artificial Intelligence and Machine Learning. This comprehensive course covers everything from basic concepts to advanced implementations.',
  tags: ['AI', 'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow'],
  syllabus: [
    {
      week: 1,
      title: 'Introduction to AI & ML',
      topics: ['Basic Concepts', 'Python Setup', 'Data Types'],
      duration: '2 hours',
    },
    {
      week: 2,
      title: 'Data Preprocessing',
      topics: ['Data Cleaning', 'Feature Engineering', 'Data Visualization'],
      duration: '3 hours',
    },
    {
      week: 3,
      title: 'Machine Learning Algorithms',
      topics: ['Supervised Learning', 'Unsupervised Learning', 'Model Selection'],
      duration: '4 hours',
    },
  ],
  requirements: [
    'Basic Python programming knowledge',
    'Understanding of mathematics and statistics',
    'Computer with Python installed',
    'Dedication to learn and practice',
  ],
  reviews: [
    {
      id: 1,
      user: 'John Doe',
      avatar: 'https://source.unsplash.com/random/100x100?portrait',
      rating: 5,
      comment: 'Excellent course! The instructor explains complex concepts in a clear and engaging way.',
      date: '2024-02-15',
    },
    {
      id: 2,
      user: 'Jane Smith',
      avatar: 'https://source.unsplash.com/random/100x100?portrait',
      rating: 4,
      comment: 'Great content and practical examples. Would recommend to anyone interested in AI.',
      date: '2024-02-10',
    },
  ],
};

const CourseDetails = () => {
  const { id } = useParams();
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
            <Grid item xs={12} md={8}>
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
                  {courseData.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Star color="primary" sx={{ mr: 0.5 }} />
                    <Typography variant="body1">{courseData.rating}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Group sx={{ mr: 0.5 }} />
                    <Typography variant="body1">{courseData.students} students</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTime sx={{ mr: 0.5 }} />
                    <Typography variant="body1">{courseData.duration}</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, mb: 3, flexWrap: 'wrap' }}>
                  {courseData.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        background: 'rgba(0,242,255,0.1)',
                        color: 'primary.main',
                        '&:hover': {
                          background: 'rgba(0,242,255,0.2)',
                        },
                      }}
                    />
                  ))}
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {courseData.description}
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                    },
                  }}
                >
                  Enroll Now - {courseData.price}
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={courseData.instructor.avatar}
                        sx={{ width: 60, height: 60, mr: 2 }}
                      />
                      <Box>
                        <Typography variant="h6">{courseData.instructor.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {courseData.instructor.bio}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Star color="primary" sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{courseData.instructor.rating} Instructor Rating</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Group sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{courseData.instructor.students} Students</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <School sx={{ mr: 0.5 }} />
                      <Typography variant="body2">{courseData.instructor.courses} Courses</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Course Content */}
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
            <Tab label="Overview" />
            <Tab label="Syllabus" />
            <Tab label="Instructor" />
            <Tab label="Reviews" />
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  background: 'rgba(26, 26, 63, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,242,255,0.2)',
                  mb: 4,
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 3, fontFamily: 'Orbitron' }}>
                    What You'll Learn
                  </Typography>
                  <Grid container spacing={2}>
                    {['AI Fundamentals', 'Machine Learning Models', 'Deep Learning', 'Practical Projects'].map((item) => (
                      <Grid item xs={12} sm={6} key={item}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CheckCircle color="primary" sx={{ mr: 1 }} />
                          <Typography>{item}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              <Card
                sx={{
                  background: 'rgba(26, 26, 63, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,242,255,0.2)',
                }}
              >
                <CardContent>
                  <Typography variant="h5" sx={{ mb: 3, fontFamily: 'Orbitron' }}>
                    Course Requirements
                  </Typography>
                  <List>
                    {courseData.requirements.map((req) => (
                      <ListItem key={req}>
                        <ListItemIcon>
                          <CheckCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  background: 'rgba(26, 26, 63, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,242,255,0.2)',
                  position: 'sticky',
                  top: 100,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2, fontFamily: 'Orbitron' }}>
                    Course Features
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <PlayCircle color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="12 hours of video content" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Description color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Downloadable resources" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <Quiz color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Practice quizzes" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmojiEvents color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Certificate of completion" />
                    </ListItem>
                  </List>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                      },
                    }}
                  >
                    Enroll Now - {courseData.price}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        )}

        {tabValue === 1 && (
          <Card
            sx={{
              background: 'rgba(26, 26, 63, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0,242,255,0.2)',
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mb: 3, fontFamily: 'Orbitron' }}>
                Course Syllabus
              </Typography>
              {courseData.syllabus.map((week) => (
                <Box key={week.week} sx={{ mb: 4 }}>
                  <Typography variant="h6" sx={{ mb: 2, color: 'primary.main' }}>
                    Week {week.week}: {week.title}
                  </Typography>
                  <List>
                    {week.topics.map((topic) => (
                      <ListItem key={topic}>
                        <ListItemIcon>
                          <PlayCircle color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={topic} />
                      </ListItem>
                    ))}
                  </List>
                  <Typography variant="body2" color="text.secondary">
                    Duration: {week.duration}
                  </Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        )}

        {tabValue === 2 && (
          <Card
            sx={{
              background: 'rgba(26, 26, 63, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(0,242,255,0.2)',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar
                  src={courseData.instructor.avatar}
                  sx={{ width: 100, height: 100, mr: 3 }}
                />
                <Box>
                  <Typography variant="h5" sx={{ fontFamily: 'Orbitron' }}>
                    {courseData.instructor.name}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    {courseData.instructor.bio}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Star color="primary" sx={{ mr: 0.5 }} />
                      <Typography>{courseData.instructor.rating}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Group sx={{ mr: 0.5 }} />
                      <Typography>{courseData.instructor.students} Students</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <School sx={{ mr: 0.5 }} />
                      <Typography>{courseData.instructor.courses} Courses</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        )}

        {tabValue === 3 && (
          <Box>
            <Typography variant="h5" sx={{ mb: 3, fontFamily: 'Orbitron' }}>
              Student Reviews
            </Typography>
            {courseData.reviews.map((review) => (
              <Card
                key={review.id}
                sx={{
                  background: 'rgba(26, 26, 63, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,242,255,0.2)',
                  mb: 2,
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={review.avatar} sx={{ mr: 2 }} />
                    <Box>
                      <Typography variant="subtitle1">{review.user}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                  </Box>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {review.comment}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {new Date(review.date).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default CourseDetails; 