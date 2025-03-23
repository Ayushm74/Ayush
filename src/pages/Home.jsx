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
  TextField,
  InputAdornment,
  IconButton,
  Chip,
  Slider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  InputBase,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  Rating,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from '@mui/material';
import {
  Search as SearchIcon,
  Star as StarIcon,
  AccessTime as AccessTimeIcon,
  School as SchoolIcon,
  Computer as ComputerIcon,
  Science as ScienceIcon,
  Business as BusinessIcon,
  Palette as PaletteIcon,
  Language as LanguageIcon,
  Psychology as PsychologyIcon,
  HealthAndSafety as HealthIcon,
  Engineering as EngineeringIcon,
  MusicNote as MusicIcon,
  SportsEsports as SportsIcon,
  Work as WorkIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Description as DescriptionIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Refresh as RefreshIcon,
  RotateRight as RotateRightIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
} from '@mui/icons-material';

const Home = () => {
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [difficulty, setDifficulty] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [openInstructorDialog, setOpenInstructorDialog] = useState(false);
  const [openCertificateDialog, setOpenCertificateDialog] = useState(false);
  const [bookmarkedCourses, setBookmarkedCourses] = useState([]);
  const [showDomains, setShowDomains] = useState(true);

  // Mock data for popular courses with expanded instructor details
  const popularCourses = [
    {
      id: 1,
      title: 'Advanced Web Development',
      instructor: {
        name: 'John Doe',
        avatar: 'https://source.unsplash.com/random/100x100?portrait',
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        email: 'john.doe@example.com',
        location: 'San Francisco, CA',
        bio: 'John has over 10 years of experience in web development and has taught thousands of students worldwide. He specializes in modern JavaScript frameworks and cloud technologies.',
        rating: 4.8,
        totalStudents: 15000,
        totalCourses: 5,
        expertise: ['JavaScript', 'React', 'Node.js', 'Cloud Computing'],
      },
      rating: 4.8,
      students: 1234,
      duration: '8 weeks',
      price: 49.99,
      image: 'https://wolfiztechnologies.com/wp-content/uploads/2024/08/Advanced-Web-Application-Development-2.jpg',
      tags: ['Web Development', 'JavaScript', 'React'],
      domain: 'technology',
      difficulty: 'intermediate',
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      instructor: {
        name: 'Jane Smith',
        avatar: 'https://source.unsplash.com/random/100x100?woman',
        title: 'Lead UI/UX Designer',
        company: 'Design Studio Pro',
        email: 'jane.smith@example.com',
        location: 'New York, NY',
        bio: 'Jane is an award-winning UI/UX designer with expertise in creating intuitive and beautiful user interfaces. She has worked with major tech companies and startups.',
        rating: 4.9,
        totalStudents: 12000,
        totalCourses: 3,
        expertise: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
      },
      rating: 4.6,
      students: 856,
      duration: '6 weeks',
      price: 39.99,
      image: 'https://i.ytimg.com/vi/BU_afT-aIn0/maxresdefault.jpg',
      tags: ['Design', 'UI/UX', 'Figma'],
      domain: 'design',
      difficulty: 'beginner',
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      instructor: {
        name: 'Mike Johnson',
        avatar: 'https://source.unsplash.com/random/100x100?man',
        title: 'Data Science Lead',
        company: 'Data Analytics Corp',
        email: 'mike.johnson@example.com',
        location: 'Seattle, WA',
        bio: 'Mike is a data science expert with a Ph.D. in Machine Learning. He has published multiple research papers and has extensive experience in both academia and industry.',
        rating: 4.7,
        totalStudents: 18000,
        totalCourses: 7,
        expertise: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics'],
      },
      rating: 4.7,
      students: 2341,
      duration: '10 weeks',
      price: 59.99,
      image: 'https://degreeinoneyear.in/wp-content/uploads/2023/05/data-science-best-online-course-in-india.png',
      tags: ['Data Science', 'Python', 'Machine Learning'],
      domain: 'technology',
      difficulty: 'advanced',
    },
    // Add more courses with similar structure
    {
      id: 4,
      title: 'Full Stack Development Bootcamp',
      instructor: {
        name: 'Alex Chen',
        avatar: 'https://source.unsplash.com/random/100x100?developer',
        title: 'Full Stack Developer',
        company: 'Tech Academy',
        email: 'alex.chen@example.com',
        location: 'Boston, MA',
        bio: 'Alex is a full stack developer with expertise in modern web technologies. He has helped hundreds of students transition into tech careers.',
        rating: 4.9,
        totalStudents: 9000,
        totalCourses: 4,
        expertise: ['MERN Stack', 'TypeScript', 'AWS', 'Docker'],
      },
      rating: 4.8,
      students: 1567,
      duration: '12 weeks',
      price: 69.99,
      image: 'https://wolfiztechnologies.com/wp-content/uploads/2024/08/Advanced-Web-Application-Development-2.jpg',
      tags: ['Full Stack', 'Web Development', 'MERN'],
      domain: 'technology',
      difficulty: 'advanced',
    },
    {
      id: 5,
      title: 'Advanced UI/UX Design',
      instructor: {
        name: 'Sarah Williams',
        avatar: 'https://source.unsplash.com/random/100x100?designer',
        title: 'Senior UX Designer',
        company: 'Creative Labs',
        email: 'sarah.williams@example.com',
        location: 'Los Angeles, CA',
        bio: 'Sarah specializes in creating user-centered designs and has worked with Fortune 500 companies.',
        rating: 4.8,
        totalStudents: 7500,
        totalCourses: 3,
        expertise: ['UI Design', 'User Research', 'Adobe XD', 'Design Systems'],
      },
      rating: 4.7,
      students: 982,
      duration: '8 weeks',
      price: 54.99,
      image: 'https://i.ytimg.com/vi/BU_afT-aIn0/maxresdefault.jpg',
      tags: ['UI/UX', 'Design Systems', 'Adobe XD'],
      domain: 'design',
      difficulty: 'advanced',
    },
    {
      id: 6,
      title: 'Machine Learning & AI',
      instructor: {
        name: 'Dr. Robert Lee',
        avatar: 'https://source.unsplash.com/random/100x100?professor',
        title: 'AI Research Scientist',
        company: 'AI Research Institute',
        email: 'robert.lee@example.com',
        location: 'San Jose, CA',
        bio: 'Dr. Lee has extensive experience in AI and machine learning, with multiple published papers and patents.',
        rating: 4.9,
        totalStudents: 11000,
        totalCourses: 5,
        expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
      },
      rating: 4.9,
      students: 3102,
      duration: '14 weeks',
      price: 79.99,
      image: 'https://degreeinoneyear.in/wp-content/uploads/2023/05/data-science-best-online-course-in-india.png',
      tags: ['AI', 'Machine Learning', 'Deep Learning'],
      domain: 'technology',
      difficulty: 'advanced',
    }
  ];

  // Domain categories with icons
  const domains = [
    { id: 'all', name: 'All Domains', icon: <SchoolIcon /> },
    { id: 'technology', name: 'Technology', icon: <ComputerIcon /> },
    { id: 'science', name: 'Science', icon: <ScienceIcon /> },
    { id: 'business', name: 'Business', icon: <BusinessIcon /> },
    { id: 'design', name: 'Design', icon: <PaletteIcon /> },
    { id: 'languages', name: 'Languages', icon: <LanguageIcon /> },
    { id: 'psychology', name: 'Psychology', icon: <PsychologyIcon /> },
    { id: 'health', name: 'Health', icon: <HealthIcon /> },
    { id: 'engineering', name: 'Engineering', icon: <EngineeringIcon /> },
    { id: 'music', name: 'Music', icon: <MusicIcon /> },
    { id: 'sports', name: 'Sports', icon: <SportsIcon /> },
  ];

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleDomainChange = (domainId) => {
    setSelectedDomain(domainId);
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
    setOpenInstructorDialog(true);
  };

  const handleCloseInstructorDialog = () => {
    setOpenInstructorDialog(false);
    setSelectedCourse(null);
  };

  const handleCertificateClick = (e) => {
    e.stopPropagation();
    setOpenCertificateDialog(true);
  };

  const handleCloseCertificateDialog = () => {
    setOpenCertificateDialog(false);
  };

  // Add bookmark handler
  const handleBookmark = (e, courseId) => {
    e.stopPropagation();
    setBookmarkedCourses(prev => {
      if (prev.includes(courseId)) {
        return prev.filter(id => id !== courseId);
      } else {
        return [...prev, courseId];
      }
    });
  };

  // Filter courses based on search query and other filters
  const filteredCourses = popularCourses.filter(course => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      course.title.toLowerCase().includes(searchLower) ||
      course.instructor.name.toLowerCase().includes(searchLower) ||
      course.tags.some(tag => tag.toLowerCase().includes(searchLower));
    
    const matchesDomain = selectedDomain === 'all' || course.domain.toLowerCase() === selectedDomain.toLowerCase();
    const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1];
    const matchesDifficulty = difficulty === 'all' || course.difficulty === difficulty;

    return matchesSearch && matchesDomain && matchesPrice && matchesDifficulty;
  });

  return (
    <Box sx={{ bgcolor: '#1a1a2e', minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2a1b3d 0%, #1a1a2e 100%)',
          color: 'white',
          py: 12,
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
            zIndex: 1,
          },
        }}
      >
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h1" 
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: '#ffffff',
                }}
              >
                Kite Learn - Soar Higher
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, opacity: 0.9, color: '#b3b3b3' }}>
                Elevate your learning journey with Kite Learn's expert-led courses
              </Typography>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  maxWidth: 600,
                  bgcolor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1, color: 'white' }}
                  placeholder="Search for courses..."
                  value={searchQuery}
                  onChange={(e) => {
                    e.preventDefault();
                    setSearchQuery(e.target.value);
                  }}
                  inputProps={{ 'aria-label': 'search courses' }}
                />
                <Divider sx={{ height: 28, m: 0.5, bgcolor: 'rgba(255, 255, 255, 0.1)' }} orientation="vertical" />
                <IconButton sx={{ p: '10px', color: 'white' }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  width: '100%',
                  height: '400px',
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transform: 'translateY(20px)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(0)',
                  },
                  bgcolor: 'rgba(0, 0, 0, 0.2)',
                }}
              >
                <img
                  src="https://logopond.com/logos/39b5231f555b9ce7641ca7f84de0b306.png"
                  alt="Online Learning Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    background: 'transparent',
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        {/* Domain Filters */}
        <Box sx={{ mb: 6 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h5" sx={{ color: 'white' }}>
              Browse by Domain
            </Typography>
            <IconButton 
              onClick={() => setShowDomains(!showDomains)}
              sx={{ color: 'white' }}
            >
              {showDomains ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Collapse in={showDomains}>
            <Grid container spacing={2}>
              {domains.map((domain) => (
                <Grid item key={domain.id}>
                  <Chip
                    icon={domain.icon}
                    label={domain.name}
                    onClick={() => handleDomainChange(domain.id)}
                    sx={{
                      bgcolor: selectedDomain === domain.id ? 'primary.main' : 'rgba(255, 255, 255, 0.1)',
                      color: selectedDomain === domain.id ? 'white' : 'white',
                      '&:hover': {
                        bgcolor: selectedDomain === domain.id ? 'primary.dark' : 'rgba(255, 255, 255, 0.2)',
                      },
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Collapse>
        </Box>

        {/* Filters Section */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                  Price Range
                </Typography>
                <Slider
                  value={priceRange}
                  onChange={handlePriceChange}
                  valueLabelDisplay="auto"
                  min={0}
                  max={200}
                  marks
                  sx={{ 
                    mt: 2,
                    color: 'primary.main',
                    '& .MuiSlider-markLabel': {
                      color: 'white',
                    },
                  }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography variant="body2" sx={{ color: 'white' }}>${priceRange[0]}</Typography>
                  <Typography variant="body2" sx={{ color: 'white' }}>${priceRange[1]}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ bgcolor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
                  Difficulty Level
                </Typography>
                <FormControl fullWidth>
                  <Select
                    value={difficulty}
                    onChange={handleDifficultyChange}
                    label="Difficulty"
                    sx={{
                      color: 'white',
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                      },
                    }}
                  >
                    <MenuItem value="all">All Levels</MenuItem>
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Popular Courses Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', mb: 4 }}>
            Popular Courses
          </Typography>
          {filteredCourses.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
                No courses found matching your search criteria
              </Typography>
              <Typography variant="body1" sx={{ color: '#b3b3b3' }}>
                Try adjusting your search terms or filters
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={4}>
              {filteredCourses.map((course) => (
                <Grid item xs={12} sm={6} md={4} key={course.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      cursor: 'pointer',
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        bgcolor: 'rgba(255, 255, 255, 0.08)',
                        boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
                      },
                    }}
                    onClick={() => handleCourseClick(course)}
                  >
                    <CardMedia
                      component="img"
                      height="240"
                      image={course.image}
                      alt={course.title}
                      sx={{
                        objectFit: 'cover',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h6" component="h2" sx={{ color: 'white' }}>
                        {course.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#b3b3b3' }} gutterBottom>
                        {course.instructor.name}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                        <StarIcon sx={{ color: '#ffc107', mr: 0.5 }} />
                        <Typography variant="body2" sx={{ mr: 1, color: 'white' }}>
                          {course.rating}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#b3b3b3' }}>
                          ({course.students} students)
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <AccessTimeIcon sx={{ mr: 0.5, fontSize: 20, color: '#b3b3b3' }} />
                        <Typography variant="body2" sx={{ mr: 2, color: '#b3b3b3' }}>
                          {course.duration}
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white' }}>
                          ${course.price}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
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
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCourseClick(course);
                        }}
                        sx={{
                          background: 'linear-gradient(135deg, #00ff9d 0%, #00b8d4 100%)',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #00b8d4 0%, #00ff9d 100%)',
                          },
                        }}
                      >
                        View Course Details
                      </Button>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>

        {/* Add 3D Model Section at the bottom */}
        <Box sx={{ mb: 6, mt: 8 }}>
          <Typography variant="h4" gutterBottom sx={{ color: 'white', textAlign: 'center', mb: 4 }}>
            Interactive 3D Learning Experience
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: '500px',
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              bgcolor: 'rgba(0, 0, 0, 0.2)',
              mx: 'auto',
              maxWidth: '1000px',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                zIndex: 1,
              },
            }}
          >
            <iframe
              src="https://my.spline.design/holographicearthwithdynamiclines-39c900a0a55e5bdbffbbefbbff28a706/"
              frameBorder="0"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                position: 'relative',
                zIndex: 2,
                background: 'transparent',
              }}
              title="3D Holographic Earth with Dynamic Lines"
              allow="autoplay; camera; gyroscope; accelerometer"
            />
          </Box>
        </Box>
      </Container>

      {/* Instructor Details Dialog */}
      <Dialog
        open={openInstructorDialog}
        onClose={handleCloseInstructorDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedCourse && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={selectedCourse.instructor.avatar}
                  sx={{ width: 60, height: 60 }}
                />
                <Box>
                  <Typography variant="h6">{selectedCourse.instructor.name}</Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {selectedCourse.instructor.title}
                  </Typography>
                </Box>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h6" gutterBottom>
                    About the Instructor
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedCourse.instructor.bio}
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                    Expertise
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedCourse.instructor.expertise.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        color="primary"
                        variant="outlined"
                      />
                    ))}
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <WorkIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Company"
                        secondary={selectedCourse.instructor.company}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EmailIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Email"
                        secondary={selectedCourse.instructor.email}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LocationIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Location"
                        secondary={selectedCourse.instructor.location}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <StarIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Rating"
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Rating value={selectedCourse.instructor.rating} precision={0.1} readOnly />
                            <Typography variant="body2">
                              ({selectedCourse.instructor.totalStudents} students)
                            </Typography>
                          </Box>
                        }
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SchoolIcon />
                      </ListItemIcon>
                      <ListItemText
                        primary="Total Courses"
                        secondary={selectedCourse.instructor.totalCourses}
                      />
                    </ListItem>
                  </List>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseInstructorDialog}>Close</Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleCertificateClick}
              >
                View Certificate
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Add Certificate Preview Dialog */}
      <Dialog
        open={openCertificateDialog}
        onClose={handleCloseCertificateDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ textAlign: 'center', bgcolor: '#1a1a2e', color: 'white' }}>
          Course Completion Certificate
        </DialogTitle>
        <DialogContent sx={{ bgcolor: '#1a1a2e', p: 4 }}>
          <Box
            sx={{
              background: 'linear-gradient(135deg, #2a1b3d 0%, #1a1a2e 100%)',
              borderRadius: 2,
              p: 4,
              position: 'relative',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)',
                borderRadius: 2,
                zIndex: 1,
              },
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 2 }}>
              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: '#00ff9d',
                  mb: 4,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                }}
              >
                Certificate of Completion
              </Typography>

              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: 'white',
                  mb: 6,
                  fontWeight: 500,
                }}
              >
                This is to certify that
              </Typography>

              <Typography
                variant="h3"
                align="center"
                sx={{
                  color: '#00ff9d',
                  mb: 4,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                [Student Name]
              </Typography>

              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: 'white',
                  mb: 6,
                  fontWeight: 400,
                }}
              >
                has successfully completed the course
              </Typography>

              <Typography
                variant="h4"
                align="center"
                sx={{
                  color: '#00ff9d',
                  mb: 4,
                  fontWeight: 600,
                }}
              >
                {selectedCourse?.title}
              </Typography>

              <Typography
                variant="h6"
                align="center"
                sx={{
                  color: 'white',
                  mb: 6,
                  fontWeight: 400,
                }}
              >
                under the instruction of
              </Typography>

              <Typography
                variant="h5"
                align="center"
                sx={{
                  color: '#00ff9d',
                  mb: 6,
                  fontWeight: 500,
                }}
              >
                {selectedCourse?.instructor.name}
              </Typography>

              <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    Date of Completion
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00ff9d',
                      textAlign: 'center',
                    }}
                  >
                    [Completion Date]
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                    }}
                  >
                    Certificate ID
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#00ff9d',
                      textAlign: 'center',
                    }}
                  >
                    [Certificate ID]
                  </Typography>
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 4,
                  mt: 6,
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    background: 'linear-gradient(135deg, #00ff9d 0%, #00b8d4 100%)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #00b8d4 0%, #00ff9d 100%)',
                    },
                  }}
                >
                  Download Certificate
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: '#00ff9d',
                    borderColor: '#00ff9d',
                    '&:hover': {
                      borderColor: '#00b8d4',
                      color: '#00b8d4',
                    },
                  }}
                >
                  Share Certificate
                </Button>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions sx={{ bgcolor: '#1a1a2e', p: 2 }}>
          <Button onClick={handleCloseCertificateDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home; 