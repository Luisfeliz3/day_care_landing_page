// App.js
import React from 'react';
import kids_play from "../src/images/kids_play.png";
import kids_infant from "../src/images/kids_infant.png";
import kids_meal from "../src/images/kids_meal.png";
import kids_art from "../src/images/kids_art.png";
import kids_phys_ed from "../src/images/phys_ed.png";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  AppBar,
  Link,
  TextField,
  Toolbar,
  IconButton,
  Avatar,
  Rating,
  Paper,
  Fab,
  useScrollTrigger,
  Zoom,
  Grow,
  Fade,
  Slide
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChildCare,
  School,
  Restaurant,
  SportsSoccer,
  Brush,
  Favorite,
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
  ArrowUpward,
  AccessTime,
  Group,
  EmojiEmotions
} from '@mui/icons-material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Create a vibrant, child-friendly theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B9D', // Soft pink
      light: '#FFB3C6',
      dark: '#E63E7C',
    },
    secondary: {
      main: '#4ECDC4', // Fresh turquoise
      light: '#A5E9E3',
      dark: '#2DA89F',
    },
    accent: {
      main: '#FFD166', // Sunny yellow
      light: '#FFE5A3',
      dark: '#F4B740',
    },
    background: {
      default: '#F9F7F3',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2D4059',
      secondary: '#4A5568',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Comic Sans MS", "Chalkboard SE", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.8rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.8,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 30px',
          fontSize: '1.1rem',
          fontWeight: 600,
          textTransform: 'none',
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
          },
        },
      },
    },
  },
});

// Animated section component
const AnimatedSection = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Floating animation for elements
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Scroll to top button
const ScrollTop = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 99 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

function App() {
  const services = [
    {
      title: "Infant Care",
      description: "Nurturing environment for babies 6 weeks to 12 months",
      icon: <ChildCare sx={{ fontSize: 60, color: '#FF6B9D' }} />,
      color: '#FFE5E9',
      image: (kids_infant)
    },
    {
      title: "Toddler Program",
      description: "Toddler Program",
      icon: <EmojiEmotions sx={{ fontSize: 60, color: '#4ECDC4' }} />,
      color: '#E0F7F5',
      image: (kids_meal)
    },
    {
      title: "Kids Lounge",
      description: "Play Socialize and Kids Entertainment",
      icon: <School sx={{ fontSize: 60, color: '#FFD166' }} />,
      color: '#FFF3D6',
      image: (kids_phys_ed)
    },
    {
      title: "Art & Creativity",
      description: "Express themselves through various art forms",
      icon: <Brush sx={{ fontSize: 60, color: '#FF6B9D' }} />,
      color: '#FFE5E9',
      image: (kids_art)
    },
    {
      title: "Physical Education",
      description: "Gross motor skill development through play",
      icon: <SportsSoccer sx={{ fontSize: 60, color: '#4ECDC4' }} />,
      color: '#E0F7F5',
      image: (kids_phys_ed)
    },
    {
      title: "Nutrition Program",
      description: "Healthy meals and snacks prepared fresh daily",
      icon: <Restaurant sx={{ fontSize: 60, color: '#FFD166' }} />,
      color: '#FFF3D6',
      image: (kids_meal)
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      child: "Emma, 3 years",
      rating: 5,
      comment: "The teachers are amazing! My daughter has learned so much and loves going to daycare every day.",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Michael Chen",
      child: "Liam, 2 years",
      rating: 5,
      comment: "Clean facility, caring staff, and great curriculum. Couldn't ask for better care for our son.",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      name: "Jessica Williams",
      child: "Sophia, 4 years",
      rating: 5,
      comment: "The art program is fantastic! My daughter's creativity has flourished since joining.",
      avatar: "https://i.pravatar.cc/150?img=2"
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navigation */}
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <IconButton edge="start" color="primary" sx={{ mr: 2 }}>
            <ChildCare />
          </IconButton>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}>
            Altagracia Navarro Day Care
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Button color="inherit" href="#home">Home</Button>
            <Button color="inherit" href="#services">Services</Button>
            <Button color="inherit" href="#about">About</Button>
            <Button color="inherit" href="#testimonials">Testimonials</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </Box>
          <Button variant="contained" color="primary" sx={{ ml: 2 }}>
            Enroll Now
          </Button>
          <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box id="home" sx={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(135deg, #FFE5E9 0%, #E0F7F5 50%, #FFF3D6 100%)' }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <AnimatedSection>
                <Typography variant="h1" gutterBottom>
                  Altagracia's
                  <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                    Day Care
                  </Box>
                </Typography>
                <Typography variant="body1" paragraph sx={{ fontSize: '1.2rem', mb: 4 }}>
                  Providing a safe, nurturing, and stimulating environment where your child can explore, learn, and develop essential skills through play-based learning.
                </Typography>
                <Box sx={{ '& button': { mr: 2, mb: 2 } }}>
                  <Button variant="contained" size="large" color="primary">
                    Schedule a Tour
                  </Button>
                  <Button variant="outlined" size="large" color="primary">
                    Learn More
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', gap: 3, mt: 4 }}>
                  <Box>
                    <Typography variant="h3" color="primary">10+</Typography>
                    <Typography variant="body2">Years Experience</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" color="secondary">50+</Typography>
                    <Typography variant="body2">Happy Children</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h3" color="accent">5⭐</Typography>
                    <Typography variant="body2">Parent Reviews</Typography>
                  </Box>
                </Box>
              </AnimatedSection>
            </Grid>
            <Grid item xs={12} md={6}>
              <FloatingElement>
                <Box
                  component="img"
                  src={kids_play}
                  alt="Happy children playing"
                  sx={{
                    width: '100%',
                    maxWidth: 500,
                    height: 'auto',
                    borderRadius: 8,
                    boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                  }}
                />
              </FloatingElement>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8, bgcolor: 'background.default' }}>
        <Container>
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
              We provide the perfect blend of safety, care, and fun for your little ones
            </Typography>
          </AnimatedSection>
          
          <Grid container spacing={4}>
            {[
              { icon: <Group />, title: "Personal Care", desc: "Individual attention for every child" },
              { icon: <School />, title: "Certified", desc: "Qualified and passionate educators" },
              { icon: <AccessTime />, title: "Flexible Hours", desc: "7:00 AM - 6:00 PM, Monday-Friday" },
              { icon: <Favorite />, title: "Safe Environment", desc: "Secure facility with cameras" }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Paper
                    elevation={3}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)',
                        bgcolor: 'primary.light',
                      }
                    }}
                  >
                    <Box sx={{ color: 'primary.main', fontSize: 60, mb: 2 }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h5" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Paper>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              Our Programs
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
              Age-appropriate programs designed to nurture growth and development
            </Typography>
          </AnimatedSection>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <AnimatedSection delay={index * 0.1}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={service.image}
                      alt={service.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar sx={{ bgcolor: service.color, mr: 2 }}>
                          {service.icon}
                        </Avatar>
                        <Typography variant="h5" component="div">
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {service.description}
                      </Typography>
                      <Button size="small" color="primary">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box id="testimonials" sx={{ py: 8, bgcolor: 'secondary.light' }}>
        <Container>
          <AnimatedSection>
            <Typography variant="h2" align="center" gutterBottom>
              What Parents Say
            </Typography>
            <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
              Hear from our happy families about their experience
            </Typography>
          </AnimatedSection>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Slide direction="up" in={true} timeout={500 * (index + 1)}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                        <Box>
                          <Typography variant="h6">{testimonial.name}</Typography>
                          <Typography variant="body2" color="text.secondary">
                            Parent of {testimonial.child}
                          </Typography>
                        </Box>
                      </Box>
                      <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                      <Typography variant="body1" paragraph>
                        "{testimonial.comment}"
                      </Typography>
                    </CardContent>
                  </Card>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: 8, bgcolor: 'white' }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <AnimatedSection>
                <Typography variant="h2" gutterBottom>
                  Get in Touch
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                  Ready to give your child the best start? Contact us today to schedule a tour or ask any questions.
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Phone sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography>(555) 123-4567</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography>info@littleexplorers.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOn sx={{ color: 'primary.main', mr: 2 }} />
                    <Typography>123 Children's Lane, Kidville, KV 12345</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
                  <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                    <Facebook />
                  </IconButton>
                  <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                    <Instagram />
                  </IconButton>
                  <IconButton color="primary" sx={{ bgcolor: 'primary.light' }}>
                    <Twitter />
                  </IconButton>
                </Box>
              </AnimatedSection>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <AnimatedSection delay={0.2}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="h5" gutterBottom>
                    Send us a Message
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Phone" variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained" color="primary" fullWidth size="large">
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ bgcolor: 'primary.dark', color: 'white', py: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <ChildCare sx={{ mr: 1 }} />
                <Typography variant="h6">Altagracia Navarro Day Care</Typography>
              </Box>
              <Typography variant="body2">
                Nurturing young minds and creating safe environments.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Quick Links</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#home" color="inherit" underline="hover">Home</Link>
                <Link href="#services" color="inherit" underline="hover">Services</Link>
                <Link href="#about" color="inherit" underline="hover">About Us</Link>
                <Link href="#contact" color="inherit" underline="hover">Contact</Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Hours of Operation</Typography>
              <Typography variant="body2">Monday - Friday: 7:00 AM - 6:00 PM</Typography>
              <Typography variant="body2">Saturday: Closed</Typography>
              <Typography variant="body2">Sunday: Closed</Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} Little Explorers Daycare. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* Scroll to top button */}
      <ScrollTop>
        <Fab color="primary" size="small">
          <ArrowUpward />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}

export default App;