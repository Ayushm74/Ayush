import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import StudentDashboard from './pages/StudentDashboard';
import InstructorDashboard from './pages/InstructorDashboard';
import AdminPanel from './pages/AdminPanel';
import Courses from './pages/Courses';
import Discussions from './pages/Discussions';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00f2ff',
    },
    secondary: {
      main: '#ff00ff',
    },
    background: {
      default: '#0a0a1f',
      paper: '#1a1a3f',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Orbitron", sans-serif',
    h1: {
      fontFamily: 'Orbitron',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Orbitron',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Orbitron',
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'uppercase',
          letterSpacing: 1,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          background: 'rgba(26, 26, 63, 0.8)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/discussions" element={<Discussions />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
