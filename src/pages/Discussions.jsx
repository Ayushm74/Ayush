import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Avatar,
  IconButton,
  Chip,
  Divider,
  Paper,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Collapse,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import {
  Send as SendIcon,
  ThumbUp as ThumbUpIcon,
  ThumbUpOutlined as ThumbUpOutlinedIcon,
  Comment as CommentIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

// Mock data for discussions
const discussions = [
  {
    id: 1,
    title: 'How to implement authentication in React applications?',
    content: 'I\'m working on a React project and need help with implementing user authentication. What are the best practices and recommended libraries?',
    author: {
      name: 'John Doe',
      avatar: 'https://source.unsplash.com/random/100x100?portrait',
      role: 'Frontend Developer',
    },
    timestamp: '2 hours ago',
    likes: 24,
    commentCount: 8,
    comments: [
      {
        id: 1,
        content: 'I recommend using Firebase Authentication. It\'s easy to implement and provides many features out of the box.',
        author: {
          name: 'Jane Smith',
          avatar: 'https://source.unsplash.com/random/100x100?woman',
        },
        timestamp: '1 hour ago',
        likes: 5,
      },
    ],
    tags: ['React', 'Authentication', 'Security'],
    isLiked: false,
    isBookmarked: false,
  },
  {
    id: 2,
    title: 'Best practices for state management in large React applications',
    content: 'What are the recommended approaches for managing state in large-scale React applications? Should I use Redux, Context API, or something else?',
    author: {
      name: 'Alice Johnson',
      avatar: 'https://source.unsplash.com/random/100x100?girl',
      role: 'Senior Developer',
    },
    timestamp: '5 hours ago',
    likes: 18,
    commentCount: 12,
    comments: [
      {
        id: 1,
        content: 'For large applications, I recommend using Redux Toolkit. It provides a great developer experience and helps maintain clean code.',
        author: {
          name: 'Bob Wilson',
          avatar: 'https://source.unsplash.com/random/100x100?man',
        },
        timestamp: '4 hours ago',
        likes: 3,
      },
    ],
    tags: ['React', 'State Management', 'Redux'],
    isLiked: false,
    isBookmarked: false,
  },
];

const Discussions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedDiscussion, setExpandedDiscussion] = useState(null);
  const [openNewDiscussion, setOpenNewDiscussion] = useState(false);
  const [newDiscussion, setNewDiscussion] = useState({ title: '', content: '', tags: '' });

  const handleExpandDiscussion = (discussionId) => {
    setExpandedDiscussion(expandedDiscussion === discussionId ? null : discussionId);
  };

  const handleLike = (discussionId) => {
    // Implement like functionality
  };

  const handleBookmark = (discussionId) => {
    // Implement bookmark functionality
  };

  const handleNewDiscussion = () => {
    // Implement new discussion creation
    setOpenNewDiscussion(false);
    setNewDiscussion({ title: '', content: '', tags: '' });
  };

  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
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
            Q&A Discussions
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Connect with other learners and share your knowledge
          </Typography>
        </Box>

        {/* Search and New Discussion */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={() => setOpenNewDiscussion(true)}
              sx={{
                background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                },
              }}
            >
              Start New Discussion
            </Button>
          </Grid>
        </Grid>

        {/* Discussions List */}
        <Grid container spacing={3}>
          {discussions.map((discussion) => (
            <Grid item xs={12} key={discussion.id}>
              <Card
                sx={{
                  background: 'rgba(26, 26, 63, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0,242,255,0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 20px rgba(0,242,255,0.2)',
                  },
                }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Avatar
                      src={discussion.author.avatar}
                      alt={discussion.author.name}
                      sx={{ width: 48, height: 48, mr: 2 }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h6" sx={{ mb: 0.5 }}>
                        {discussion.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Posted by {discussion.author.name} • {discussion.timestamp}
                      </Typography>
                    </Box>
                    <IconButton onClick={() => handleBookmark(discussion.id)}>
                      {discussion.isBookmarked ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                    </IconButton>
                  </Box>

                  <Typography variant="body1" sx={{ mb: 2 }}>
                    {discussion.content}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    {discussion.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
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

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton onClick={() => handleLike(discussion.id)}>
                      {discussion.isLiked ? <ThumbUpIcon color="primary" /> : <ThumbUpOutlinedIcon />}
                    </IconButton>
                    <Typography variant="body2">{discussion.likes}</Typography>
                    <IconButton onClick={() => handleExpandDiscussion(discussion.id)}>
                      <CommentIcon />
                    </IconButton>
                    <Typography variant="body2">{discussion.commentCount}</Typography>
                    <IconButton>
                      <ShareIcon />
                    </IconButton>
                  </Box>

                  <Collapse in={expandedDiscussion === discussion.id}>
                    <Divider sx={{ my: 2 }} />
                    <List>
                      {discussion.comments.map((comment) => (
                        <ListItem key={comment.id}>
                          <ListItemAvatar>
                            <Avatar src={comment.author.avatar} alt={comment.author.name} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={comment.content}
                            secondary={
                              <Typography variant="caption" color="text.secondary">
                                {comment.author.name} • {comment.timestamp}
                              </Typography>
                            }
                          />
                          <ListItemSecondaryAction>
                            <IconButton edge="end">
                              <ThumbUpOutlinedIcon />
                            </IconButton>
                            <Typography variant="caption" sx={{ ml: 1 }}>
                              {comment.likes}
                            </Typography>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* New Discussion Dialog */}
        <Dialog
          open={openNewDiscussion}
          onClose={() => setOpenNewDiscussion(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>Start New Discussion</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              label="Title"
              value={newDiscussion.title}
              onChange={(e) => setNewDiscussion({ ...newDiscussion, title: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Content"
              multiline
              rows={4}
              value={newDiscussion.content}
              onChange={(e) => setNewDiscussion({ ...newDiscussion, content: e.target.value })}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Tags (comma-separated)"
              value={newDiscussion.tags}
              onChange={(e) => setNewDiscussion({ ...newDiscussion, tags: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenNewDiscussion(false)}>Cancel</Button>
            <Button
              onClick={handleNewDiscussion}
              variant="contained"
              sx={{
                background: 'linear-gradient(45deg, #00f2ff, #ff00ff)',
                '&:hover': {
                  background: 'linear-gradient(45deg, #00d4e0, #e600e6)',
                },
              }}
            >
              Post Discussion
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Discussions; 