import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating,
  IconButton,
} from '@mui/material';
import {
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
} from '@mui/icons-material';

const Courses = () => {
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);

  const courses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: {
        name: 'John Doe',
        rating: 4.8,
        totalStudents: 15000,
      },
      rating: 4.8,
      students: 1234,
      duration: '8 weeks',
      price: 49.99,
      image: 'https://wolfiztechnologies.com/wp-content/uploads/2024/08/Advanced-Web-Application-Development-2.jpg',
      tags: ['Web Development', 'JavaScript', 'React'],
      description: 'Master modern web development with advanced JavaScript frameworks and cloud technologies.',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: {
        name: 'Jane Smith',
        rating: 4.9,
        totalStudents: 12000,
      },
      rating: 4.6,
      students: 856,
      duration: '6 weeks',
      price: 39.99,
      image: 'https://i.ytimg.com/vi/BU_afT-aIn0/maxresdefault.jpg',
      tags: ['Design', 'UI/UX', 'Figma'],
      description: 'Learn to create beautiful and intuitive user interfaces with modern design principles.',
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      instructor: {
        name: 'Mike Johnson',
        rating: 4.7,
        totalStudents: 18000,
      },
      rating: 4.7,
      students: 2341,
      duration: '10 weeks',
      price: 59.99,
      image: 'https://degreeinoneyear.in/wp-content/uploads/2023/05/data-science-best-online-course-in-india.png',
      tags: ['Data Science', 'Python', 'Machine Learning'],
      description: 'Dive into data science with Python, machine learning, and statistical analysis.',
    },
    {
      id: 4,
      title: 'Full Stack Development Bootcamp',
      instructor: {
        name: 'Alex Chen',
        rating: 4.9,
        totalStudents: 9000,
      },
      rating: 4.8,
      students: 1567,
      duration: '12 weeks',
      price: 69.99,
      image: 'https://wolfiztechnologies.com/wp-content/uploads/2024/08/Advanced-Web-Application-Development-2.jpg',
      tags: ['Full Stack', 'Web Development', 'MERN'],
      description: 'Become a full-stack developer with modern web technologies and frameworks.',
    },
    {
      id: 5,
      title: 'Advanced UI/UX Design',
      instructor: {
        name: 'Sarah Williams',
        rating: 4.8,
        totalStudents: 7500,
      },
      rating: 4.7,
      students: 982,
      duration: '8 weeks',
      price: 54.99,
      image: 'https://i.ytimg.com/vi/BU_afT-aIn0/maxresdefault.jpg',
      tags: ['UI/UX', 'Design Systems', 'Adobe XD'],
      description: 'Take your UI/UX skills to the next level with advanced design concepts.',
    },
    {
      id: 6,
      title: 'Machine Learning & AI',
      instructor: {
        name: 'Dr. Robert Lee',
        rating: 4.9,
        totalStudents: 11000,
      },
      rating: 4.9,
      students: 3102,
      duration: '14 weeks',
      price: 79.99,
      image: 'https://degreeinoneyear.in/wp-content/uploads/2023/05/data-science-best-online-course-in-india.png',
      tags: ['AI', 'Machine Learning', 'Deep Learning'],
      description: 'Explore artificial intelligence and machine learning with hands-on projects.',
    }
  ];

  const handleBookmark = (courseId) => {
    setBookmarkedCourses(prev => {
      if (prev.includes(courseId)) {
        return prev.filter(id => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  return (
    <Box sx={{ bgcolor: '#1a1a2e', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="xl">
        <Typography variant="h3" sx={{ color: 'white', mb: 6, textAlign: 'center' }}>
          Explore Our Courses
        </Typography>
        
        <Grid container spacing={4}>
          {courses.map((course) => (
            <Grid item xs={12} md={6} key={course.id}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  height: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    bgcolor: 'rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  sx={{
                    width: { xs: '100%', md: '40%' },
                    objectFit: 'cover',
                  }}
                  image={course.image}
                  alt={course.title}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Typography variant="h5" component="h2" sx={{ color: 'white', mb: 2 }}>
                        {course.title}
                      </Typography>
                      <IconButton 
                        onClick={() => handleBookmark(course.id)}
                        sx={{ color: 'white' }}
                      >
                        {bookmarkedCourses.includes(course.id) ? (
                          <BookmarkIcon sx={{ color: '#00ff9d' }} />
                        ) : (
                          <BookmarkBorderIcon />
                        )}
                      </IconButton>
                    </Box>
                    
                    <Typography variant="body1" sx={{ color: '#b3b3b3', mb: 2 }}>
                      {course.description}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="body2" sx={{ color: 'white', mr: 2 }}>
                        by {course.instructor.name}
                      </Typography>
                      <Rating value={course.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" sx={{ color: '#b3b3b3', ml: 1 }}>
                        ({course.students} students)
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <AccessTimeIcon sx={{ color: '#b3b3b3', mr: 1 }} />
                      <Typography variant="body2" sx={{ color: '#b3b3b3', mr: 3 }}>
                        {course.duration}
                      </Typography>
                      <Typography variant="h6" sx={{ color: 'white' }}>
                        ${course.price}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {course.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                            color: 'white',
                            '&:hover': {
                              bgcolor: 'rgba(255, 255, 255, 0.2)',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>

                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{
                        background: 'linear-gradient(135deg, #00ff9d 0%, #00b8d4 100%)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #00b8d4 0%, #00ff9d 100%)',
                        },
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Courses; 