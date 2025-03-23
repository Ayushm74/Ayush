import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ForumIcon from '@mui/icons-material/Forum';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Courses', path: '/courses' },
    { text: 'Discussions', path: '/discussions', icon: <ForumIcon /> },
    { text: 'Student Dashboard', path: '/student-dashboard', icon: <DashboardIcon /> },
    { text: 'Instructor Dashboard', path: '/instructor-dashboard', icon: <SchoolIcon /> },
    { text: 'Admin Panel', path: '/admin-panel', icon: <AdminPanelSettingsIcon /> },
  ];

  const drawer = (
    <Box sx={{ background: 'rgba(26, 26, 63, 0.95)', height: '100%' }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              '&:hover': {
                background: 'rgba(0, 242, 255, 0.1)',
              },
            }}
          >
            {item.icon && <Box sx={{ mr: 2 }}>{item.icon}</Box>}
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(10, 10, 31, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0, 242, 255, 0.2)',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            fontFamily: 'Orbitron',
            fontWeight: 700,
            textShadow: '0 0 10px rgba(0, 242, 255, 0.5)',
          }}
        >
          KITE LEARN
        </Typography>

        {!isMobile && (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={RouterLink}
                to={item.path}
                color="inherit"
                sx={{
                  '&:hover': {
                    background: 'rgba(0, 242, 255, 0.1)',
                  },
                }}
              >
                {item.icon && <Box sx={{ mr: 1 }}>{item.icon}</Box>}
                {item.text}
              </Button>
            ))}
          </Box>
        )}

        <IconButton color="inherit" sx={{ ml: 2 }}>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" sx={{ ml: 2 }}>
          <PersonIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'rgba(10, 10, 31, 0.95)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 