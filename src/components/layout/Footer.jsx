import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(10, 10, 31, 0.8)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(0, 242, 255, 0.2)',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: 'Orbitron',
                fontWeight: 700,
                color: 'primary.main',
                textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
                mb: 2,
              }}
            >
              FUTURE LEARN
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Empowering minds through innovative online education. Join us in shaping the future of learning.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/about" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                About Us
              </Link>
              <Link href="/courses" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Courses
              </Link>
              <Link href="/contact" color="inherit" sx={{ textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                color="inherit"
                sx={{
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: '1px solid rgba(0, 242, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Future Learn. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 