import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  LinearProgress,
  IconButton,
  Chip,
  Divider,
} from '@mui/material';
import {
  School as SchoolIcon,
  People as PeopleIcon,
  Assessment as AssessmentIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  Timer as TimerIcon,
  EmojiEvents as EmojiEventsIcon,
} from '@mui/icons-material';

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Mock data for instructor's courses
  const courses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      students: 156,
      rating: 4.8,
      revenue: 15600,
      status: 'active',
      lastUpdated: '2024-02-15',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      students: 89,
      rating: 4.6,
      revenue: 8900,
      status: 'active',
      lastUpdated: '2024-02-14',
    },
    {
      id: 3,
      title: 'Mobile App Development',
      students: 45,
      rating: 4.7,
      revenue: 4500,
      status: 'draft',
      lastUpdated: '2024-02-13',
    },
  ];

  // Mock data for analytics
  const analytics = {
    totalStudents: 290,
    totalRevenue: 29000,
    averageRating: 4.7,
    completionRate: 85,
    monthlyGrowth: 12,
  };

  // Mock data for recent students
  const recentStudents = [
    {
      id: 1,
      name: 'John Doe',
      course: 'Advanced Web Development',
      progress: 75,
      lastActive: '2 hours ago',
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'UI/UX Design Fundamentals',
      progress: 45,
      lastActive: '5 hours ago',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      course: 'Mobile App Development',
      progress: 30,
      lastActive: '1 day ago',
    },
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
          color: 'white',
          py: 8,
          mb: 4,
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h1" gutterBottom>
                Welcome back, Professor!
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                Manage your courses and track student progress
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} sx={{ textAlign: { md: 'right' } }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<AddIcon />}
                sx={{ mt: { xs: 2, md: 0 } }}
              >
                Create New Course
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        {/* Analytics Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
                color: 'white',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PeopleIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Total Students</Typography>
                </Box>
                <Typography variant="h4">{analytics.totalStudents}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Across all courses
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
                color: 'white',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <TrendingUpIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Total Revenue</Typography>
                </Box>
                <Typography variant="h4">${analytics.totalRevenue}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  This month
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #f57c00 0%, #e65100 100%)',
                color: 'white',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <StarIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Average Rating</Typography>
                </Box>
                <Typography variant="h4">{analytics.averageRating}</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Out of 5 stars
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card
              sx={{
                height: '100%',
                background: 'linear-gradient(135deg, #c2185b 0%, #880e4f 100%)',
                color: 'white',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <EmojiEventsIcon sx={{ mr: 1 }} />
                  <Typography variant="h6">Completion Rate</Typography>
                </Box>
                <Typography variant="h4">{analytics.completionRate}%</Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Course completion
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Courses Section */}
          <Grid item xs={12} md={8}>
            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                  <Typography variant="h5">Your Courses</Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    startIcon={<AddIcon />}
                  >
                    New Course
                  </Button>
                </Box>
                <Tabs
                  value={activeTab}
                  onChange={handleTabChange}
                  sx={{ mb: 3 }}
                >
                  <Tab label="Active" />
                  <Tab label="Draft" />
                  <Tab label="Archived" />
                </Tabs>
                <List>
                  {courses.map((course) => (
                    <React.Fragment key={course.id}>
                      <ListItem
                        secondaryAction={
                          <Box>
                            <IconButton edge="end" sx={{ mr: 1 }}>
                              <EditIcon />
                            </IconButton>
                            <IconButton edge="end">
                              <DeleteIcon />
                            </IconButton>
                          </Box>
                        }
                      >
                        <ListItemAvatar>
                          <Avatar sx={{ bgcolor: 'primary.main' }}>
                            <SchoolIcon />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={course.title}
                          secondary={
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                              <Chip
                                icon={<PeopleIcon />}
                                label={`${course.students} students`}
                                size="small"
                                variant="outlined"
                              />
                              <Chip
                                icon={<StarIcon />}
                                label={course.rating}
                                size="small"
                                variant="outlined"
                              />
                              <Chip
                                icon={<TrendingUpIcon />}
                                label={`$${course.revenue}`}
                                size="small"
                                variant="outlined"
                              />
                            </Box>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Students Section */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Recent Students
                </Typography>
                <List>
                  {recentStudents.map((student) => (
                    <React.Fragment key={student.id}>
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>{student.name[0]}</Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary={student.name}
                          secondary={
                            <Box>
                              <Typography variant="body2" color="text.secondary">
                                {student.course}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                                <LinearProgress
                                  variant="determinate"
                                  value={student.progress}
                                  sx={{ flexGrow: 1 }}
                                />
                                <Typography variant="body2" color="text.secondary">
                                  {student.progress}%
                                </Typography>
                              </Box>
                              <Typography variant="caption" color="text.secondary">
                                Last active: {student.lastActive}
                              </Typography>
                            </Box>
                          }
                        />
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default InstructorDashboard; 